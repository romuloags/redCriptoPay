import  { useState, useEffect } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "react-bootstrap/Tooltip"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"

const Profile = ({defaultAccount, contactInfo, connected}) => {
  const [info, setInfo] = useState("");
  const [showInfo, setShowInfo] = useState("");
  const [isSendingTransaction, setIsSendingTransaction] = useState(false);
  const [sentTransaction, setSentTransaction] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()  => {
    const load = async () => {     

      setLoading(true);

      const showUserContactInfo = await contactInfo.methods.getusercontactinfo(defaultAccount).call();
      setShowInfo(showUserContactInfo);

      setLoading(false);
     
    }
    if(connected) {
      load();
    }
   
  }, [defaultAccount, showInfo, contactInfo, sentTransaction]);

  const updateProfile = async (e) => {
    e.preventDefault();
    setIsSendingTransaction(true);
   const receipt = await contactInfo.methods.Setusercontactinfo(info).send({from: defaultAccount});    
   console.log(receipt);
   const check = await contactInfo.methods.getusercontactinfo(defaultAccount).call();    
   setInfo("");
   console.log(check);
   setIsSendingTransaction(false);
   setSentTransaction(true);
  }  

    return (
   <div className="profile">     
    <div className="bg-dark min-vh-100"> 
      <section className="py-5">
        <div className="container-md">
          <div className="row justify-content-center mx-lg-5">
            <div className="col my-4 text-center">
              <div>
                <h3 className="fs-4 text-danger text-start"><i 
                className="bi bi-person-circle text-danger pe-2"></i> Perfil</h3>
              </div>         
            </div>         
          </div>
          <div className="row justify-content-center  mx-lg-5">
            <div className="col-lg-8  pb-5 text-center">
              <div className="card justify content-center mb-5">
                 <div className="card-body">
                 <h5 className="card-title text-start"><i className=
                 "bi bi-person-lines-fill me-2"></i>Datos de contacto
                 <span>
                            <>
                            {['bottom'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Al registrar sus datos de contacto (e.g número telefónico) con su dirección de 
                            billetera, ayuda a que su contraparte se asegure que se trata de usted.
                            </Tooltip>
                            }
                            >   
                            <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                            </OverlayTrigger>
                            ))}
                            </>
                 </span>
                 </h5>
                 {loading && 
                 <div className="spinner-border m-2 text-primary" role="status">
                 <span className="visually-hidden">Loading...</span>
                 </div>
                 }
                 {connected && showInfo !== "" && !loading && <p className="card-text text-info">{showInfo}</p>}
                 {connected && showInfo === "" && !loading && <p className="card-text text-info">No registrado.</p>}
                 <p className="card-text"><small className="text-muted"><i 
                 className="bi bi-person-circle pe-2"></i>
                 {connected ? <CopyToClipboard text={defaultAccount}>
                 <span type="text">
                  {`${defaultAccount.substr(0, defaultAccount.length - 36)}...${defaultAccount.substr(37)}`}
                 </span> 
                 </CopyToClipboard> : <span>No conectado</span> }
                  {connected && <CopyToClipboard text={defaultAccount}>
                  <button className="btn btn-primary ms-3 btn-sm" type="submit">
                  <i className="bi bi-clipboard"></i>
                  </button>
                  </CopyToClipboard>}
                  </small></p>
                 </div>
                </div>
                <div className="card mb-5">
               <div className="card-body">
               <h5 className="card-title text-start"><i className=
               "bi bi-pencil-square me-2"></i>Actualizar datos
               <span>
                            <>
                            {['bottom'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Recuerde que para registrar sus datos en la Blockchain debe pagar una comisión de red (gas fee)
                            en BNB.
                            </Tooltip>
                            }
                            >   
                            <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                            </OverlayTrigger>
                            ))}
                            </>
                 </span>
               </h5>
               <form onSubmit={updateProfile}>
               <div className="input-group my-3">
               <textarea required  value={info} className="form-control border-2" 
               onChange={(e) =>setInfo(e.target.value)}
               placeholder="Ejemplo: Whatsapp +584... telegram username..."></textarea>
               </div>
               {defaultAccount && !isSendingTransaction && <button className="btn btn-primary ms-3 btn-sm" type="submit">Guardar</button>}
               </form>
               {isSendingTransaction && <div className="text-primary">
                  Si cancela la transacción debe recargar la página.</div>}
               </div> 
              </div>
          </div>
          </div>    
        </div>   
      </section>
    </div>
  </div>  
  );
}
 
export default Profile
  