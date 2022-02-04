import { CopyToClipboard } from "react-copy-to-clipboard";
import logo from "../assets/favicon.png"
import { Link } from "react-router-dom";

const Navbar = ({connect, defaultAccount, connected, isLoading, noProvider}) => {

   return ( 
      <nav className="navbar navbar-light bg-light fixed-top shadow-sm">
      <div className="container-xxl justify-content-between">
        <Link className="text-decoration-none ms-lg-3" to="/">
          <img src={logo} width="30" height="30" className="d-inline-block" alt="logo"></img>
          <i className="bi bi-cash text-danger p-2 pe-lg-2"></i>  
          <h1 className="text-primary d-none fs-6 d-sm-inline">Pay</h1>
        </Link>
        {connected && <CopyToClipboard text={defaultAccount}>
        <button className="btn btn-primary" type="submit">
        {`${defaultAccount.substr(0, defaultAccount.length - 36)}...${defaultAccount.substr(37)}`}
        </button></CopyToClipboard>} 
        {!isLoading && !connected && !noProvider && <button onClick={connect} id="liveToast"
         className="btn btn-primary" type="submit">
        Conectar Billetera</button>}
        {isLoading && !connected && <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span className="visually-hidden">Loading...</span></button>}
        {!isLoading && !connected && noProvider && <a href="https://metamask.io/download">
        <button className="btn btn-dark" type="submit">
        Descargue Metamask</button></a>}
        <button className="navbar-toggler rounded-circle ms-lg-4 me-lg-3 
        bg-secondary px-2 border-1" 
        type="button" data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span><i className="bi bi-list"></i></span>
        </button>
        <div className="offcanvas offcanvas-end border-0" tabIndex="-1" id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header bg-info" data-bs-dismiss="offcanvas" aria-label="Close">
           <div className="container">
            <div className="row mt-3">
             <div className="col ms-5"> 
              <Link to="/perfil" className=" nav-item-menu btn btn-success text-light rounded-pill" 
              tabIndex="-1" role="button" aria-disabled="true">
                <i className="bi bi-person-circle pe-2"></i>Perfil</Link>
              </div>
              <div className="col mt-5 ms-5">
              <button type="button" className="btn-close btn-close-white d-block ms-5" 
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div> 
            </div>
           </div>   
          </div>
          <div className="offcanvas-body justify-content-center bg-info">
            <div className="menu-list">
            <ul className="navbar-nav flex-grow-1 ps-1">
            <a className="nav-link text-light d-inline py-0" 
                href="https://redcripto.com">
              <li className="nav-item-menu py-2">
                <i className=" bi bi-bag-fill text-light d-inline p-2"></i>Marketplace
              </li>
              </a>
              <Link className="nav-link text-light d-inline py-0" to="/">
              <li className="nav-item-menu py-2" data-bs-dismiss="offcanvas" aria-label="Close">
                <i 
                className="bi bi-house-door-fill text-light d-inline p-2"></i>Home
              </li>
              </Link>
              <Link className="nav-link text-light d-inline py-0" to="/buscar">
              <li className="nav-item-menu py-2" data-bs-dismiss="offcanvas" aria-label="Close">
                <i 
                className="bi bi-search text-light  d-inline p-2"></i>Buscar usuario
              </li>
              </Link>
              <Link className="nav-link text-light d-inline py-0" to="/depositar">
              <li className="nav-item-menu py-2" data-bs-dismiss="offcanvas" aria-label="Close">
                <i 
                className="bi bi bi-cash text-light d-inline p-2"></i>Depositar
              </li>
              </Link>
              <Link className="nav-link text-light d-inline py-0" to="/historial">
              <li className="nav-item-menu py-2" data-bs-dismiss="offcanvas" aria-label="Close">
                <i 
                className="bi bi-clock-history text-light d-inline p-2"></i>Historial
              </li>
              </Link>        
            </ul>
           </div>  
          </div>
        </div>
      </div>        
    </nav>
    );
}
 
export default Navbar;


