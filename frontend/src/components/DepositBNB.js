import { useState } from "react";

import Web3 from "web3";

import bnbicon from "../assets/bnbicon.png"
import Tooltip from "react-bootstrap/Tooltip"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"

const DepositBNB = ({defaultAccount, bnbEscrow}) => {

  const [receiverAccount, setReceiverAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [isSendingTransaction, setIsSendingTransaction] = useState(false);

  const web3 = Web3

  const validInput = web3.utils.isAddress(receiverAccount) && amount > 0;

  const BNBdeposit = async (e) => {
    e.preventDefault();

    setIsSendingTransaction(true);
  
   const receipt = await bnbEscrow.methods.createDeposit(receiverAccount).send({from: defaultAccount, value: web3.utils.toWei(amount.toString())});    
   console.log(receipt);
   const check = await bnbEscrow.methods.TransactionLedger(0).call();    
   setReceiverAccount("");
   setAmount("");
   console.log(check);
   setIsSendingTransaction(false);
  }

    return ( 
        <div className="depositbnb">     
          <div className="row justify-content-center  mx-lg-5">
            <div className="col pb-5 text-center">
              <div className="card shadow justify content-center mb-5">
               <div className="card-body">
                <h5 className="card-title fs-6 text-start">
                <img src={bnbicon} width="30" height="30" alt="bnbicon"></img>  
                </h5>             
                <form>
                <div className="my-3 text-start">
                <label htmlFor="address" className="text-info form-label">Dirección (Receptor)</label>
                <div className="row g-2">
                <div>  
                <input type="text" className="form-control" id="address"
                required  value={receiverAccount}
                onChange={(e) =>setReceiverAccount(e.target.value)}
                placeholder="e.g 0xD212....C03E"/>
                </div>
                </div>
                </div>
                <div className=" my-3 text-start">
                <label htmlFor="address" className=" text-info form-label">Monto</label>
                <div className="input-group">  
                <input type="text" className="form-control" id="address" 
                aria-describedby="BNB" placeholder="e.g 0.3"
                required  value={amount}
                onChange={(e) =>setAmount(e.target.value)}/>
                <span className="input-group-text" id="BNB">BNB</span>
                </div>
                </div>
                {!validInput && defaultAccount && <div className="text-primary">
                  Ingrese una dirección y monto válidos.</div>}
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
                <span className="text-warning ms-2"> {(amount * 0.03).toFixed(5)} 
                <span className="text-warning ms-1">BNB</span></span></div>
                <div className="text-muted text-start my-2">Cantidad a recibir
                <span>
                <>
                {['right'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                monto - fee 
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </>
                </span>
                <span className="ms-2 text-warning">{(amount *0.97).toFixed(5)}
                <span className="text-warning ms-1">BNB</span></span></div>    
                {defaultAccount && validInput > 0 && isSendingTransaction === false && 
                <button onClick={BNBdeposit} 
                className="btn btn-primary m-3" type="submit"><i 
                className="bi bi-box-arrow-in-down pe-2"></i>Depositar</button>}
                </form>              
                </div>
              </div>
            </div>
          </div>    
        </div>   


  );
 
}
 
export default DepositBNB;