import ArchiveBNBreceived from "./archiveBNBreceived";
import ArchiveBNBsent from "./archiveBNBsent";

const BNBhistory = ({defaultAccount, bnbEscrow, connected}) => {

    return ( 
       
       <div>
         <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
         <li className="nav-item" role="presentation">
         <button className="nav-link active" id="enviadasBNB-tab" data-bs-toggle="pill" 
         data-bs-target="#enviadasBNB" type="button" role="tab" aria-controls="enviadasBNB" 
         aria-selected="true"><i className="bi bi-arrow-up-circle me-1"></i>Enviadas
         </button>
         </li>
         <li className="nav-item" role="presentation">
         <button className="nav-link" id="recibidasBNB-tab" 
         data-bs-toggle="pill" data-bs-target="#recibidasBNB" 
         type="button" role="tab" aria-controls="recibidasBNB" 
         aria-selected="false"><i className="bi bi-arrow-down-circle me-1"></i>Recibidas
         </button>
         </li>
         </ul>
         <div className="tab-content" id="pills-tabContent">
         <div className="tab-pane fade show active" id="enviadasBNB" role="tabpanel" 
         aria-labelledby="enviadasBNB-tab"><ArchiveBNBsent 
         defaultAccount={defaultAccount} bnbEscrow={bnbEscrow} connected={connected}>
         </ArchiveBNBsent>
         </div>
         <div className="tab-pane fade" id="recibidasBNB" role="tabpanel" 
         aria-labelledby="recibidasBNB-tab"><ArchiveBNBreceived 
         defaultAccount={defaultAccount} bnbEscrow={bnbEscrow} connected={connected}>
         </ArchiveBNBreceived>
         </div>
         </div>
         </div>
 
    );
 }
  
 export default BNBhistory;