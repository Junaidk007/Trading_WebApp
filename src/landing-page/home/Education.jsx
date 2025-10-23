function Education() {
    return ( 
        <div className="container-fluid mt-5" style={{
                width: "1100px",
                maxWidth: "100%",
                margin: "0 auto",
                justifyContent: "space-between"
            }}>
            <div className="row justify-content-between">
                <div className="col-5">
                    <img src="media\images\education.svg" alt="" style={{width:"100%"}} />
                </div>
                <div className="col-6 justify-content-center d-flex flex-column">
                    <h5 className="h3 pb-3" style={{fontWeight: "400"}}>Free and open market education</h5>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className="pb-4" href="">Varsity <i className="fa-solid fa-arrow-right-long "></i></a>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">TradingQ&A <i className="fa-solid fa-arrow-right-long "></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;