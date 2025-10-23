function Pricing() {

    let style = {
        width: "8rem"
    }
    let fontStyle = {
        fontSize: "0.65rem",
        width: "75%"
    }
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="row" style={{
                width: "1100px",
                maxWidth: "100%",
                margin: "0 auto"
            }}>
                <div className="col-5">
                    <h4>Unbeatable pricing</h4>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See pricing  <i className="fa-solid fa-arrow-right-long "></i></a>
                </div>
                <div className="col-7">
                    <div className="d-flex">
                        <div className=" d-flex" style={{width: "17rem"}}>
                            <img src="media\images\pricingMF.svg" alt="" style={style} />
                            <p className="text-muted pt-5" style={fontStyle}>Free account
                                opening</p>
                        </div>
                        <div className=" d-flex me-2" style={{width: "20rem"}}>
                            <img src="media\images\pricingMF.svg" alt="" style={style} />
                            <p className="text-muted pt-5" style={fontStyle}>Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className=" d-flex" style={{width: "15rem"}}>
                            <img src="media\images\intradayTrades.svg" alt="" style={style} />
                            <p className="text-muted pt-5" style={fontStyle }>Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;