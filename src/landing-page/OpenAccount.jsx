function OpenAccount() {
    return ( 
        <div className="container-fluid pt-5 mb-5 pb-5">
            <div className="row justify-content-center text-center" style={{
            width: "1100px",
            maxWidth: "100%",
            margin: "0 auto"
        }}>
                <h6 className="h4 pb-4">Open a Zerodha account</h6>
                <p className="text-muted pb-4 fs-6">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <a  className="btn btn-primary fs-5" style={{ width: "17%", borderRadius: "3px", backgroundColor: "#387ed1" }} href="">Sign Up for free</a>
            </div>
        </div>
     );
}

export default OpenAccount;