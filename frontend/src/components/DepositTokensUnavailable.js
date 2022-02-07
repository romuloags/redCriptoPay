import Tooltip from "react-bootstrap/Tooltip";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger";

const DepositTokensUnavailable = ({defaultAccount, tokensEscrow}) => {
    
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

export default DepositTokensUnavailable;