import { useState } from "react";

import Tooltip from "react-bootstrap/Tooltip";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Select from "react-select"

import tokensArray from "./tokensArray";
import Web3 from "web3";
import standardER20 from "../abiERC20.json"

function customTheme(theme) {
  return {
    ...theme, colors: {...theme.colors, primary25: "lightgrey", primary:"gainsboro" }
  }
}

  const DepositTOKENS = ({defaultAccount, tokensEscrow}) => {
  const [receiverAccount, setReceiverAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenTag, setTokenTag] = useState("Token");
  const [tokenId, setTokenId] = useState(undefined);
  const [tokenAddress, setTokenAddress] = useState(undefined);
  const [tokensContract, setTokensContract] = useState(undefined);
  const [isSendingTransaction, setIsSendingTransaction] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(undefined);

  const web3 = new Web3 (window.ethereum);

  const onSelectChange = async (e) => {
    setTokenTag(e.tag);
    setTokenId(e.id);
    setTokenAddress(e.address)
    if(defaultAccount) {
      const tokensContract = new web3.eth.Contract(standardER20, e.address);
      setTokensContract(tokensContract);
      
      const tokenBalance = await tokensContract.methods.balanceOf(defaultAccount).call()
      setTokenBalance(parseFloat(web3.utils.fromWei(tokenBalance)).toFixed(5));
    }
  }

  const validInput = web3.utils.isAddress(receiverAccount) && amount > 0;

  const TOKENSdeposit = async (event) => {
    event.preventDefault();

    setIsSendingTransaction(true);
   
   const tokensContract = new web3.eth.Contract(standardER20, tokenAddress);
   setTokensContract(tokensContract);
   console.log(tokensContract);
   
   const approve = await tokensContract.methods.approve(tokensEscrow._address, 
   web3.utils.toWei(amount.toString())).send({from: defaultAccount});
   const receipt = await tokensEscrow.methods.createDeposit(receiverAccount, 
   tokenId, web3.utils.toWei(amount.toString())).send({from: defaultAccount});    
   console.log(receipt);
   console.log(approve);
   setReceiverAccount("");
   setAmount("");
   setIsSendingTransaction(false);
  }

    return ( 
        <div className="searchuser">     
          <div className="row justify-content-center  mx-lg-5">
            <div className="col  pb-5 text-center">
              <div className="card shadow justify content-center mb-5">
               <div className="card-body">
                <h5 className="card-title  text-start">
                <span className="badge bg-dark">BEP-20</span>
                <div className="mt-3">
                <span className="fs-6 text-muted">Balance:</span> 
                <span className="ms-1 fs-6"><span>{tokenBalance}</span><span> {tokenTag}</span>
                <span>
                </span>
                <>
                {['bottom'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                Recuerda que la comisión de Red de la BSC se paga en BNB, no en Tokens.
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </>
                </span>
                </div>
                </h5>
                <form>
                <div className="my-3 text-start">
                <label htmlFor="address" className="text-info form-label">Dirección (Receptor)</label>
                <div className="row g-2">
                <div>
                <input type="text" className="form-control" id="address"
                aria-describedby="Receptor"
                placeholder="e.g 0xD212....C03E"
                required  value={receiverAccount}
                onChange={(e) =>setReceiverAccount(e.target.value)}/>
                </div>
                </div>
                </div>
                <div className="my-3 text-start">
                <label htmlFor="selecttoken" className="text-info form-label">Token (BEP-20)
                <span>
                <>
                {['right'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                Todos los Tokens de la BSC son BEP-20.
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </>
                </span>
                </label> 
                <Select options={tokensArray} placeholder="Seleccione el Token" 
                className="mb-3 text-muted"
                onChange={(e) => {onSelectChange(e)}}
                isSearchable
                theme={customTheme}>
                </Select>
                </div>
                <div className=" my-3 text-start">
                <label htmlFor="address" className=" text-info form-label">Monto</label>
                <div className="input-group">  
                <input type="text" className="form-control" id="address" 
                aria-describedby="Token" placeholder="e.g 0.3"
                required  value={amount} onChange={(e) =>setAmount(e.target.value)}/>
                <span className="input-group-text" id="Token">{tokenTag}</span>
                </div>
                </div>
                {!validInput && defaultAccount && <div className="text-primary">
                  Ingrese una dirección, token y monto válidos.</div>}
                {isSendingTransaction && <div className="text-primary">
                  Si cancela la transacción debe recargar la página.</div>}
                <div className="text-start text-muted my-2">Fee
                <span>
                <>
                {['right'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                3% de comisión, sin tomar en cuenta la comisión de Red (gas fee)
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </>
                </span>
                <span className="text-warning ms-2">{(amount * 0.03).toFixed(5)}
                <span className="text-warning ms-1">{tokenTag}</span></span></div>
                <div className="text-muted text-start my-2">Cantidad a recibir
                <span>
                <>
                {['right'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                Monto - Fee 
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 ms-lg-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </>
                </span>
                <span className="ms-2 text-warning">{(amount *0.97).toFixed(5)}
                <span className="text-warning ms-1">{tokenTag}</span></span></div>    
                {defaultAccount && validInput > 0 && tokenId !== undefined && isSendingTransaction === false &&
                <button className="btn btn-primary m-3" type="submit"onClick={TOKENSdeposit}>
                  <i className="bi bi-box-arrow-in-down pe-2"></i>Depositar</button>}
                  <span>
                <>
                {['top'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                Para depositar tokens debe aceptar dos transacciones consecutivas en su billetera, 
                la primera para permitir usar el monto de su token y la
                segunda para permitir crear el depósito. 
                
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 ms-lg-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </>
                </span>
                </form>     
                </div>
              </div>
            </div>
          </div>    
        </div>   

  );
}

export default DepositTOKENS;