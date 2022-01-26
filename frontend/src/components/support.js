import { useHistory } from "react-router-dom";

const Support = () => {
    
    const history = useHistory();

    const handleOnclick = (e) => {
    e.preventDefault();
    history.go(-1)
   }
    
   return (  

    <div className="history">     
      <div className="bg-dark min-vh-100"> 
        <section className="py-5">
          <div className="container-md">
            <div className="row justify-content-center mx-lg-5">
              <div className="col mt-4 mb-2 mb-lg-0 text-center">
                <div>
                <h3 className="fs-4 text-danger text-start"><i 
                 className="bi bi-key-fill pe-2"></i>Soporte
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
              <div className="card justify-content-center bg-secondary mb-5">
               <div className="card-body">             
                </div>
                <div className="row justify-content-center mx-lg-5">
                  <div className="col text-center">
                    <div className="card shadow justify content-center mb-5 mx-2">
                      <div className="card-body fs-6">  
                        <h5 className="fw-bold">Contacte al Jurado</h5>
                        <div className="my-3">
                        <a className="btn btn-primary" 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScbRdBKtLX0AlZuWiG5VaCOHl_kwLrRK1GiS4dlxrAF49h_6w/viewform?usp=sf_link" role="button">
                        <i className="bi bi-pen pe-2"></i>Formulario</a>
                        </div>
                        <div className="my-3">
                        <a className="btn btn-dark" 
                        href="https://api.whatsapp.com/send?phone=584120298783" role="button"><i className="bi bi-chat-left-text-fill pe-2"></i>Chat</a>
                        <div className="text-primary my-3">
                        Si tiene un problema con su transacción primero debe llenar el formulario y luego
                        contactar al Jurado  (soporte técnico).</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
 
export default Support;