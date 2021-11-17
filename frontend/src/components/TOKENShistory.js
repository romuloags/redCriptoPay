import ArchiveTOKENSreceived from "./archiveTOKENSreceived";
import ArchiveTOKENSsent from "./archiveTOKENSsent";

const TOKENShistory = ({defaultAccount, tokensEscrow, connected }) => {
    return (  
        <div>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
        <button className="nav-link active" id="enviadastoken-tab" data-bs-toggle="pill" 
        data-bs-target="#enviadastoken" type="button" role="tab" aria-controls="enviadastoken" 
        aria-selected="true"><i className="bi bi-arrow-up-circle me-1"></i>Enviadas
        </button>
        </li>
        <li className="nav-item" role="presentation">
        <button className="nav-link" id="recibidastoken-tab" 
        data-bs-toggle="pill" data-bs-target="#recibidastoken" 
        type="button" role="tab" aria-controls="recibidastoken" 
        aria-selected="false"><i className="bi bi-arrow-down-circle me-1"></i>Recibidas
        </button>
        </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="enviadastoken" role="tabpanel" 
        aria-labelledby="enviadastoken-tab"><ArchiveTOKENSsent defaultAccount={defaultAccount}
        tokensEscrow={tokensEscrow} connected={connected}>
        </ArchiveTOKENSsent>
        </div>
        <div className="tab-pane fade" id="recibidastoken" role="tabpanel" 
        aria-labelledby="recibidastoken-tab"><ArchiveTOKENSreceived defaultAccount={defaultAccount}
        tokensEscrow={tokensEscrow} connected={connected}>
        </ArchiveTOKENSreceived>
        </div>
        </div>
        </div>   
    );
 }
  
 export default TOKENShistory;