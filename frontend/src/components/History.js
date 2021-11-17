import BNBhistory from "./BNBhistory";
import TOKENShistory from "./TOKENShistory";
import bnbicon from "../assets/bnbicon.png"

const History = ({defaultAccount, bnbEscrow, tokensEscrow, connected}) => {
    return ( 
  <div className="history">     
    <div className="bg-dark min-vh-100"> 
      <section className="py-5">
        <div className="container-md">
          <div className="row justify-content-center mx-lg-5">
            <div className="col my-4 text-center">
              <div>
                <h3 className="fs-4 text-danger text-start"><i 
                className="bi bi-clock-history text-danger pe-2"></i>Historial</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center  mx-lg-5">
            <div className="col-lg-8  pb-5 text-center">
              <div className="card justify bg-secondary content-center mb-5">
               <div className="card-body">
               <h5 className="card-title text-start">
                <i className="bi bi-arrow-down-circle-fill text-dark me-1"></i>
                <i className="bi bi-arrow-up-circle text-dark me-1"></i>
                Transacciones</h5>             
                    <div>
                    <ul className="nav nav-pills nav-fill mx-2 mx-lg-5 justify-content-center my-3" 
                    id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active me-5" id="pills-home-tab" data-bs-toggle="pill" 
                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" 
                    aria-selected="true">BNB<img className="ms-2" src={bnbicon} width="20" 
                    height="20" alt="bnbicon"></img>
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" 
                    data-bs-toggle="pill" data-bs-target="#pills-profile" 
                    type="button" role="tab" aria-controls="pills-profile" 
                    aria-selected="false">Tokens<span className="ms-2 badge bg-dark">BEP-20</span>
                    </button>
                    </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" 
                    aria-labelledby="pills-home-tab"><BNBhistory defaultAccount={defaultAccount}
                    bnbEscrow={bnbEscrow} connected={connected}>
                    </BNBhistory>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" 
                    aria-labelledby="pills-profile-tab"><TOKENShistory defaultAccount={defaultAccount}
                    tokensEscrow={tokensEscrow} connected={connected}>
                    </TOKENShistory>
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
 
export default History;