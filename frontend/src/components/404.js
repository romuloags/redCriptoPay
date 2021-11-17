import { Link } from "react-router-dom";

const Error404 = () => {
    return (   
    <div className="position-absolute top-50 start-50 translate-middle justify-content-center">
       <h1>Error 404</h1>
       <div>
       <Link to="/">
       <button className="btn btn-dark  m-3 m-lg-5 justify-content-center" type="submit">    
       <span className="text-danger"><i className="bi bi-house pe-2"></i>Home</span>
       </button>
       </Link>
       </div>

    </div>
    );
}
 
export default Error404;