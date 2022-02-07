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
                <span className="ms-1 fs-6"><span>Depósitos de Tokens deshabilitados temporalmente. No se preocupe
                  volverán a ser habilitados el fecha y hora.
                </span>
                <>
                {['bottom'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                Tokens en revisión, por seguridad no se permite realizar depósitos de tokens en este momento, estamos actualizando
                los Tokens del contrato, para ofrecer un mejor servicio.
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
                </div>
              </div>
            </div>
          </div>    
        </div>   

  );
}

export default DepositTOKENS;