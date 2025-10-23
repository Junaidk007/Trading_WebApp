function Awards() {
    return (
        <div className="container mt-5 pb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media\images\largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5">
                    <h1 className="pt-4">Largest stock broker in India</h1>
                    <p className="pe-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li className="mb-4">
                                    <p>Futures and Options</p>
                                </li>
                                <li className="mb-4">
                                    <p>Commodity derivatives</p>
                                </li>
                                <li className="mb-4">
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="mb-4">
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li className="mb-4">
                                    <p>Direct mutual funds</p>
                                </li>
                                <li className="mb-4">
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className="mt-4" src="media\images\pressLogos.png" alt="press logo" style={{width: "90%"}}/>
                </div>
            </div>
        </div>    
    );
}

            export default Awards;