import { useState, useEffect } from "react";
import Tooltip from "react-bootstrap/Tooltip"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { useHistory } from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard";
import Web3 from "web3"
import tokensTransactions from "./tokensTransactions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleTOKENSsender = ({defaultAccount, tokensEscrow, contactInfo}) => {

 const [transactionSender, setTransactionSender] = useState("");
 const [transactionReceiver, setTransactionReceiver] = useState(undefined);
 const [transactionToken, setTransactionToken] = useState(undefined);
 const [transactionAmount, setTransactionAmount] = useState(undefined);
 const [transactionValue, setTransactionValue] = useState(undefined);
 const [transactionStatus, setTransactionStatus] = useState(undefined);
 const [receiverContactInfo, setReceiverContactInfo] = useState(undefined);
 const [isSendingTransaction, setIsSendingTransaction] = useState(false);
 const [loading, setLoading] = useState(false);

 const web3 = Web3;

  const { id } = useParams();

  const history = useHistory();

  const handleOnclick = (e) => {
    e.preventDefault();
    history.push("/historial")
   }

   useEffect(()  => {
    const load = async () => {   
       try {

      setLoading(true);  
        
      const transactionId = await tokensEscrow.methods.TransactionLedger(id).call();
      setTransactionSender(transactionId[0]);
      setTransactionReceiver(transactionId[1]);
      setTransactionToken(transactionId[2]);
      setTransactionAmount(parseFloat(web3.utils.fromWei(transactionId[3])).toFixed(5));
      setTransactionValue(parseFloat(web3.utils.fromWei(transactionId[6])).toFixed(5));
      setTransactionStatus(transactionId[7]); 

      const receiverContactInfo = await contactInfo.methods.getusercontactinfo(transactionId[1]).call();
      setReceiverContactInfo(receiverContactInfo);

      setLoading(false);

       } catch (error) {
         alert ("Debe estar conectado para ver la transacción");
         console.error(error);
       }
    }
    if(typeof defaultAccount) {
    load(); }

  }, [defaultAccount, tokensEscrow]);

  const releaseFunds = async (event) => {
    event.preventDefault();
    setIsSendingTransaction(true);
  const receipt = await tokensEscrow.methods.releaseFunds(id).send({from: defaultAccount});
  console.log(receipt)
  }

  const raiseDispute = async (event) => {
    event.preventDefault();
    setIsSendingTransaction(true);
  const receipt = await tokensEscrow.methods.raiseDispute(id).send({from: defaultAccount});
  console.log(receipt)
  }

    return (

        <div className="history">     
          <div className="bg-dark min-vh-100"> 
            <section className="py-5">
              <div className="container-md">
                <div className="row justify-content-center mx-lg-5">
                  <div className="col my-4 text-center">
                    <div>
                    <h3 className="fs-4 text-danger text-start"><i 
                    className="bi bi-clock-history text-danger pe-2"></i>Historial
                    <div>
                    <button onClick={handleOnclick} className="btn btn-primary mt-4 btn-sm" type="submit">
                    <i className="bi bi-skip-backward-fill"></i>
                    </button>
                    </div>
                    </h3>
                    </div>
                  </div>
                </div>
              <div className="row justify-content-center  mx-lg-5">
                <div className="col-lg-8  pb-5 text-center">
                {loading && 
                   <div className="card justify-content-center bg-secondary  mb-5">
                    <div className="card-body">
                    <div className="spinner-border m-2 text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                   </div>
                   }  
                  {!loading && <div className="card justify-content-center bg-secondary  mb-5">
                   <div className="card-body">
                     <h5 className="card-title text-center">
                     <div className="row justify-content-center">
                     <span className="col-12"><i className="bi bi-arrow-up-circle-fill me-1">
                     </i>Transacción enviada</span>
                     <span className="col-8 col-lg-5 my-2 col-lg-4 badge fw-normal bg-primary">
                     <span className="pe-1">ID #</span>
                     <span className="text-secondary">{id}</span></span>
                     </div>
                     </h5>             
                    </div>
                    <div className="row justify-content-center mx-lg-5">
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
                            {transactionToken !== "0x2b4db28Bf7759963e889cfED135f74051fBD1274" 
                            && <span className="mx-2 text-warning">{transactionValue}</span>}
                            {transactionToken === "0x2b4db28Bf7759963e889cfED135f74051fBD1274" 
                            && <span className="mx-2 text-warning">{transactionAmount}</span>}
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
                            <div className="text-dark my-2">Información del Receptor
                            <span>
                            <>
                            {['bottom'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Verifique que el Receptor haya registrado su información de contacto.
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
                            <div className="my-2">Estado de la transacción
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
                            {transactionStatus === "0" && <span>Depósito recibido
                            <i className="bi bi-lock-fill text-dark px-1"></i>  
                            En espera de liberación o reembolso.</span>}
                            {transactionStatus === "1" && <span>Depósito liberado al Receptor
                            <i className="bi bi-unlock-fill text-dark px-1"></i></span>}
                            {transactionStatus === "2" && <span>Depósito reembolsado al Emisor
                            <i className="bi bi-unlock-fill text-dark px-1"></i></span>}
                            {transactionStatus === "3" && <span>Depósito en disputa, 
                            en espera del jurado para liberación al receptor o reembolso al emisor.</span>}
                            </div>
                            </div>
                            <div className="mt-4">
                            {(transactionStatus === "0" || transactionStatus === "3") && defaultAccount &&
                            !isSendingTransaction &&
                            <button className="btn btn-primary mb-3  btn-sm" type="submit"
                            onClick={releaseFunds}><i 
                            className="bi bi-piggy-bank pe-2"></i>Liberar fondos</button>}
                            {transactionStatus === "0" && defaultAccount &&
                            !isSendingTransaction &&
                              <button className="btn btn-primary mb-3 ms-4 btn-sm" type="submit"
                            onClick={raiseDispute}><i 
                            className="bi bi-megaphone  pe-2"></i>Abrir disputa</button>}
                            {transactionStatus === "0" && !isSendingTransaction &&
                            <span>
                            <>
                            {['top'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Libere los fondos al receptor o abra una disputa si desea un reembolso del depósito. 
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
                            Si cancela la transacción debe recargar la página.</div>}
                            <div className="mt-3">
                            <Link className="btn btn-dark" 
                            to="/soporte" role="button"><i className="bi bi-chat-left-dots pe-2">
                            </i>Jurado</Link>
                            <span>
                            <>
                            {['top'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Luego de abrir una disputa y no estar de acuerdo con su contraparte, comuníquese con 
                            el jurado para resolver la disputa.
                            </Tooltip>
                            }
                            >   
                            <i className="bi bi-question-circle ms-2 fs-5 text-danger"></i>
                            </OverlayTrigger>
                            ))}
                            </>
                            </span> 
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>               
                   </div>}     
                 </div>
                </div>
              </div>            
            </section>
          </div>
        </div>
     );
}
 
export default SingleTOKENSsender;