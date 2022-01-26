import { Link } from "react-router-dom";

const Error404 = () => {
    return (
    <div className="min-vh-100"> 
      <section className="py-0 my-0">
        <div className="container-md">       
         <div className=" position-absolute top-50 start-50 translate-middle justify-content-center">
         <h1 className="text-muted">Error 404</h1>
         <div>
         <Link to="/">
         <button className="btn btn-primary  m-3 m-lg-5 justify-content-center" type="submit">    
         <span><i className="bi bi-house pe-2"></i>Home</span>
         </button>
         </Link>
         </div>
         </div>
        </div>
      </section>
    </div>
    );
}
 
export default Error404;