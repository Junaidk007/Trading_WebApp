function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ boxShadow: "2px 1px 2px #eee", position: "fixed", width: "100%", backgroundColor: "#fff" }}>
            <div className="container-fluid col-9">
                <div className="col-6">
                    <a className="navbar-brand" href=""><img src="media\images\logo.svg" alt="Logo" style={{ width: "7.5rem" }} /></a>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-2"><a className="nav-link p-3" href="">Signup</a></li>
                        <li className="nav-item pe-2"><a className="nav-link p-3" href="">About</a></li>
                        <li className="nav-item pe-2"><a className="nav-link p-3" href="">Products</a></li>
                        <li className="nav-item pe-2"><a className="nav-link p-3" href="">Pricing</a></li>
                        <li className="nav-item pe-2"><a className="nav-link p-3" href="">Support</a></li>
                    </ul>
                    <div>
                        <div class="">
                            <button type="button" className="btn navbtn" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className=" fs-5 fa-solid fa-bars"></i>
                            </button>
                            <ul class="navbar-menu dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                {/* <li><hr class="dropdown-divider"></li> */}
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


