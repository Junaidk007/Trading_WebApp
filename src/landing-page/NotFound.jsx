import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="text-center d-flex align-items-center" style={{ height: "90dvh" }}>
            <div className="container" style={{  }}>
               <h5 className="mb-4">Not Found</h5>
               <h1 className="mb-4 fs-1">404</h1>
               <p>Sorry, the page you are lookin for does not exist</p>
                <Link className="btn btn-dark mt-4" to={"/"}>Go Home</Link>
            </div>
        </div >
    );
}

export default NotFound;