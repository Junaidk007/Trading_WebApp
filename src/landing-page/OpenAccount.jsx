function OpenAccount() {
    return ( 
        <div className="container-fluid">
            <div className="row justify-content-center text-center" style={{
            width: "1100px",
            maxWidth: "100%",
            margin: "0 auto"
        }}>
                <h6 className="h3">Open a Zerodha account</h6>
                <p className="text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <a  className="btn btn-primary fs-5" style={{ width: "17%", borderRadius: "3px", backgroundColor: "#387ed1" }} href="">Sign Up for free</a>
            </div>
        </div>
     );
}

export default OpenAccount;