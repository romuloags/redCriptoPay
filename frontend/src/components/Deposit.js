import Tooltip from "react-bootstrap/Tooltip";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger";
import DepositBNB from "./DepositBNB"
import DepositTOKENS from "./DepositTOKENS";
import DepositTokensUnavailable from "./DepositTokensUnavailable";

const Deposit = ({userBalance, bnbEscrow, tokensEscrow, defaultAccount}) => {

    return ( 
  <div className="deposit">     
    <div className="bg-dark min-vh-100"> 
      <section className="py-5">
        <div className="container-md">
          <div className="row justify-content-center mx-lg-5">
            <div className="col my-4 text-center">
              <div>
                <h3 className="fs-4 text-danger text-start"><i 
                className="bi bi bi-cash text-danger pe-2"></i>Depositar</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center  mx-lg-5">
            <div className="col-lg-8  pb-5 text-center">
              <div className="card justify bg-secondary content-center mb-5">
               <div className="card-body">
               <h5 className="card-title text-start mb-4"><i 
                className="bi bi-bank2 text-dark me-1"></i><i 
                className="bi bi-cash text-danger"></i><span className="ms-3 
                fs-6 text-muted">Balance:</span> <span className="ms-1 fs-6">
                <span>{userBalance}</span><span> BNB</span></span>
                <>
                {['bottom'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                <Tooltip id={`tooltip-${placement}`}>
                La comisión de Red de la BSC se paga en BNB.
                </Tooltip>
                }
                >   
                <i className="bi bi-info-circle ms-2 fs-5 text-danger"></i>
                </OverlayTrigger>
                ))}
                </></h5>             
                    <div>
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" 
                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" 
                    aria-selected="true">BNB
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" 
                    data-bs-toggle="pill" data-bs-target="#pills-profile" 
                    type="button" role="tab" aria-controls="pills-profile" 
                    aria-selected="false">Tokens
                    </button>
                    </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" 
                    aria-labelledby="pills-home-tab"><DepositBNB 
                    userBalance={userBalance} bnbEscrow={bnbEscrow} defaultAccount={defaultAccount}/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" 
                    aria-labelledby="pills-profile-tab"><DepositTokensUnavailable
                    userBalance={userBalance} defaultAccount={defaultAccount} tokensEscrow={tokensEscrow}/>
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
 
export default Deposit;