import logo from "../assets/favicon.png";
import Tooltip from "react-bootstrap/Tooltip";
import  OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
<footer className=" bg-dark fixed-bottom pb-3 p-lg-3 border-top rounded-top">
  <div className="container-xxl">
     <div className="row justify-content-between">
      <div className="col pt-3">    
        <a href="https://redcripto.com" className="text-muted text-decoration-none">
        <img src={logo} width="40" height="40" className="d-inline-block mb-1 me-3" alt="redcripto"></img>
        <span className="text-secondary"> Red Cripto
        </span>
        </a>
        </div>
       <div className="col pt-4 pe-3">
         <ul className="nav justify-content-end list-unstyled">
         <li className="ms-0" >
         <span>
         <>
          {['top'].map((placement) => (
          <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
          <Tooltip id={`tooltip-${placement}`}>
          Whitepaper
          </Tooltip>
          }
          >
          <Link className="text-muted bg-warning p-1 p-lg-2 
          rounded-2" to="/whitepaper" id="tt"><i className="bi bi-file-text text-light"></i>
          </Link>
          </OverlayTrigger>
          ))}
         </>
         </span>
         </li>  
         <li className="ms-3"><a className="text-muted bg-warning p-1 p-lg-2 rounded-2" 
         href="/"><i className="bi bi-github text-danger"></i></a></li>
         <li className="ms-3"><a className="text-muted bg-warning p-1 p-lg-2 rounded-2" 
         href="https://redcripto.com/blog"><i className="bi bi-rss-fill text-danger"></i></a></li>
         </ul>
       </div>
     </div>   
  </div>  
</footer>
  );
}

export default Footer;