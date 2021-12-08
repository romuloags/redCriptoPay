import { useState } from "react";

import Tooltip from "react-bootstrap/Tooltip"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"

import Web3 from "web3";

const SearchUser = ({contactInfo, defaultAccount}) => {
  const [userAccount, setUserAccount] = useState("");
  const [accountResults, setAccountResults] = useState("");
  const [showResults, setShowResults] = useState(false);

  const web3 = Web3;
  
  const validInput = web3.utils.isAddress(userAccount);

  const searchUserAccount = async (e) => {
    e.preventDefault();
   const getUserInfo = await contactInfo.methods.getusercontactinfo(userAccount).call();
   setAccountResults(getUserInfo);    
   setShowResults(true);
   console.log(accountResults);
  }  

    return ( 
  <div className="searchuser">     
    <div className="bg-dark min-vh-100"> 
    <section className="py-5">
        <div className="container-md">
          <div className="row justify-content-center mx-lg-5">
            <div className="col my-4 text-center">
              <div>
                <h3 className="fs-4 text-danger text-start"><i 
                className="bi bi-search text-danger pe-2"></i> Buscar usuario</h3>
              </div>         
            </div>         
          </div>
          <div className="row justify-content-center  mx-lg-5">
            <div className="col-lg-8  pb-5 text-center">
              <div className="card justify content-center mb-5">
               <div className="card-body">
               <h5 className="card-title text-start text-dark"><i 
                className="bi bi-person-circle me-1"></i><i 
                className="bi bi-search"></i>
                <span>
                            <>
                            {['bottom'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                            Antes de abrir una transacción con su contraparte asegurese que sus datos de contacto 
                            estén registrados con su dirección de Criptomonedas; los datos de contacto registrados
                            por su contraparte dentro de la plataforma son los únicos que le aportan 
                            información verdadera acerca de su contacto (e.g número telefónico)
                            </Tooltip>
                            }
                            >   
                            <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                            </OverlayTrigger>
                            ))}
                            </>
                 </span>
                </h5>             
                <form onSubmit={searchUserAccount}>
                <input className="form-control my-3 border-2 shadow" type="search" 
                placeholder=" dirección e.g 0x07E...aFC3" aria-label="Search"
                value={userAccount} onChange={(e) =>setUserAccount(e.target.value)}></input>
                {defaultAccount && validInput && 
                <button className="btn btn-primary ms-3 btn-sm" type="submit"><i 
                className="bi bi-search pe-2"></i>Buscar</button>}
                </form>              
                 </div>
                </div>
                {showResults && <div className="card mb-5">
               <div className="card-body">
               <h5 className="card-title text-start">Resultados</h5>
               <div className="text-warning"><span className="text-muted mx-1"><i 
                className="bi bi-person-circle mx-1"></i> 
                </span>{accountResults}</div>
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
 
export default SearchUser;