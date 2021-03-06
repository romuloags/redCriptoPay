import { useState } from "react";
import Tooltip from "react-bootstrap/Tooltip"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { CopyToClipboard } from "react-copy-to-clipboard";
import Web3 from "web3";
import tokensTransactions from "./tokensTransactions";

const ArchiveBNBjudge = ({defaultAccount, contactInfo, tokensEscrow}) => {
  
  const [transactionId, setTransactionId] = useState("");
  const [id, setId] = useState(undefined);
  const [transactionSender, setTransactionSender] = useState(undefined);
  const [transactionReceiver, setTransactionReceiver] = useState(undefined);
  const [transactionToken, setTransactionToken] = useState(undefined);
  const [transactionAmount, setTransactionAmount] = useState(undefined);
  const [transactionValue, setTransactionValue] = useState(undefined);
  const [transactionFee, setTransactionFee] = useState(undefined);
  const [transactionStatus, setTransactionStatus] = useState(undefined);
  const [receiverContactInfo, setReceiverContactInfo] = useState(undefined);
  const [senderContactInfo, setSenderContactInfo] = useState(undefined);
  const [showResults, setShowResults] = useState(false);
  const [isSendingTransaction, setIsSendingTransaction] = useState(false);

  const web3 = Web3;
 
  const searchTransactionId = async (e) => {
    e.preventDefault();

    if(transactionId >= 0) {
   const getTransactionId = await tokensEscrow.methods.TransactionLedger(transactionId).call();
   setId(transactionId);
   setTransactionSender(getTransactionId[0]);
   setTransactionReceiver(getTransactionId[1]);
   setTransactionToken(getTransactionId[2]);
   setTransactionAmount(parseFloat(web3.utils.fromWei(getTransactionId[3])).toFixed(5));
   setTransactionFee(parseFloat(web3.utils.fromWei(getTransactionId[4])).toFixed(5));
   setTransactionValue(parseFloat(web3.utils.fromWei(getTransactionId[6])).toFixed(5));
   setTransactionStatus(getTransactionId[7]); 

   const senderContactInfo = await contactInfo.methods.getusercontactinfo(getTransactionId[0]).call();
   setSenderContactInfo(senderContactInfo);

   const receiverContactInfo = await contactInfo.methods.getusercontactinfo(getTransactionId[1]).call();
   setReceiverContactInfo(receiverContactInfo);

   setShowResults(true);
    }
    else{
      window.alert("ID invalido")
    }
  } 
  
  const releaseFunds = async (event) => {
    event.preventDefault();
    setIsSendingTransaction(true);
  const receipt = await tokensEscrow.methods.releaseFunds(id).send({from: defaultAccount});
  console.log(receipt)
  }

  const refundSender = async (event) => {
    event.preventDefault();
    setIsSendingTransaction(true);
  const receipt = await tokensEscrow.methods.refundSender(id).send({from: defaultAccount});
  console.log(receipt)
  }

    return ( 
   <div>
    <div>    
    <div className="row justify-content-center">
      <div className= "text-center">
        <div className="card justify-content-center bg-secondary border-0">
               {defaultAccount &&
               <form onSubmit={searchTransactionId}>
                <input className="form-control my-3 border-2 shadow" type="search" 
                placeholder="Transacci??n" aria-label="Search"
                value={transactionId} onChange={(e) =>setTransactionId(e.target.value)}></input>
                <button className="btn btn-primary ms-3 btn-sm" type="submit"><i 
                className="bi bi-search pe-2"></i>Buscar</button>
             </form>}
      </div>
          {showResults && <div>                    
          <div className="card-body border-0 m-0">
           <h5 className="card-title text-center">
           <div className="row justify-content-center">
           <span className="col-12">Transacci??n</span>
           <CopyToClipboard text={id}> 
           <span className="col-8 col-lg-5 my-2 col-lg-4 badge fw-normal bg-primary">
           <span className="pe-1">ID</span>
           <span className="text-secondary">{id}</span>
           </span>
           </CopyToClipboard>
           </div>
           </h5>             
          </div>
          <div className="row justify-content-center m-0">
            <div className="col pb-5 text-center">
              <div className="card shadow justify content-center mb-5">
                <div className="card-body fs-6">  
                  <h5 className="fw-bold">Detalles</h5>
                  <div className=" text-start">
                  <div className="text-dark">
                  <i className="bi bi-arrow-up-circle-fill me-1"></i>Emisor
                  </div>
                  <div className="text-info">{transactionSender}
                  <span>
                  <CopyToClipboard text={transactionSender}> 
                  <button className="btn btn-primary ms-2 btn-sm" type="submit"><i 
                  className="bi bi-clipboard"></i>
                  </button>    
                  </CopyToClipboard>
                  </span>
                  </div>
                  <div className="text-dark mt-2">
                  <i className="bi bi-arrow-down-circle me-1"></i>Receptor
                  </div>
                  <div className="text-info">{transactionReceiver}
                  <span>
                  <CopyToClipboard text={transactionReceiver}> 
                  <button className="btn btn-primary ms-2 btn-sm" type="submit"><i 
                  className="bi bi-clipboard"></i>
                  </button>
                  </CopyToClipboard>    
                  </span>
                  </div>
                  <div className=" my-2 text-info">Monto total              
                  <span className="ms-2 text-warning">{transactionAmount}
                  { tokensTransactions.map((token) =>(
                  <span className="text-warning ms-2" key={token.address}>
                  {token.address === transactionToken && <span>{token.labelSingle}
                  </span>}
                  </span> ))}
                  </span>   
                  </div>
                  <div className="text-info my-2">Valor
                  <span className="mx-2 text-warning">{transactionValue}</span>
                  {tokensTransactions.map((token) =>(
                  <span className="text-warning mx-0" key={token.address}>
                  {token.address === transactionToken && <span>{token.labelSingle}</span>}
                  </span>))}
                  <span className="ms-2">
                  <>
                  {['bottom'].map((placement) => (
                  <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                  Monto total depositado - fee (3%).
                  </Tooltip>
                  }
                  >   
                  <i className="bi bi-info-circle fs-5 text-danger"></i>
                  </OverlayTrigger>
                  ))}
                  </>
                  </span>
                  </div>
                  <div className="text-info my-2">Comisi??n
                  <span className="mx-2 text-warning">{transactionFee}</span>
                  {tokensTransactions.map((token) =>(
                  <span className="text-warning mx-0" key={token.address}>
                  {token.address === transactionToken && <span>{token.labelSingle}</span>}
                  </span>))}
                  <span className="ms-2">
                  <>
                  {['bottom'].map((placement) => (
                  <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                  1% de comisi??n correspondiente al monto total.
                  </Tooltip>
                  }
                  >   
                  <i className="bi bi-info-circle fs-5 text-danger"></i>
                  </OverlayTrigger>
                  ))}
                  </>
                  </span>
                  </div>
                  <div className="text-dark my-2">Informaci??n del Emisor
                            <span>
                            <>
                            {['bottom'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Verifique que el Emisor haya registrado su informaci??n de contacto.
                            </Tooltip>
                            }
                            >   
                            <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                            </OverlayTrigger>
                            ))}
                            </>
                            </span>
                            {senderContactInfo !== "" && <div className="ms-2 text-dark">{senderContactInfo}
                            </div>}
                            {senderContactInfo === "" && <div className="ms-2 text-dark">No registrado.
                            </div>}
                            </div>
                  <div className="text-dark my-2">Informaci??n del Receptor
                            <span>
                            <>
                            {['bottom'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Verifique que el Receptor haya registrado su informaci??n de contacto.
                            </Tooltip>
                            }
                            >   
                            <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                            </OverlayTrigger>
                            ))}
                            </>
                            </span>
                            {receiverContactInfo !== "" && <div className="ms-2 text-dark">{receiverContactInfo}
                            </div>}
                            {receiverContactInfo === "" && <div className="ms-2 text-dark">No registrado.
                            </div>}
                            </div>
                  <div className="my-2">Estado de la transacci??n
                  <span>
                  <>
                  {['bottom'].map((placement) => (
                  <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                  1 Deposito recibido, 2 Deposito liberado, 3 Deposito reembolsado, 4 Disputa en marcha.
                  </Tooltip>
                  }
                  >   
                  <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                  </OverlayTrigger>
                  ))}
                  </>
                  </span>
                  </div>
                  <div className="text-primary">
                  {transactionStatus === "0" && <span>Dep??sito recibido, 
                  en espera de liberaci??n o reembolso.</span>}
                  {transactionStatus === "1" && <span>Dep??sito liberado al Receptor.</span>}
                  {transactionStatus === "2" && <span>Dep??sito reembolsado al Emisor.</span>}
                  {transactionStatus === "3" && <span>Dep??sito en disputa, 
                  en espera del jurado para liberaci??n al receptor o reembolso al emisor.</span>}
                  </div>
                  </div>
                  <div className="mt-4">
                  {(transactionStatus === "0" || transactionStatus === "3") && defaultAccount && 
                  !isSendingTransaction && 
                  <button className="btn btn-primary  btn-sm" type="submit"
                  onClick={releaseFunds}><i
                  className="bi bi-arrow-down-circle pe-2"></i>Liberar</button>}
                  {(transactionStatus === "0" || transactionStatus === "3") && defaultAccount && 
                  !isSendingTransaction && 
                  <button className="btn btn-primary ms-4 btn-sm" type="submit"
                  onClick={refundSender}><i 
                  className="bi bi-arrow-up-circle pe-2"></i>Reembolsar</button>}
                  {transactionStatus === "0" &&<span>
                  <>
                  {['top'].map((placement) => (
                  <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                  Reembolse el dep??sito al emisor o libere los fondos al receptor.
                  </Tooltip>
                  }
                  >   
                  <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                  </OverlayTrigger>
                  ))}
                  </>
                  </span>}
                  </div>
                  {isSendingTransaction && <div className="text-primary">
                            Si cancela la transacci??n debe recargar la p??gina.</div>}
                </div>
              </div>
            </div>
         </div> 
         </div>}              
         </div>     
       </div>
      </div>
     </div>    
     );
}
 
export default ArchiveBNBjudge;