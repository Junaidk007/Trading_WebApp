function Stats() {
    return (
        <div className="container-fluid mt-5 pb-5" >
            <div className="row" style={{
            width: "1100px",
            maxWidth: "100%",
            margin: "0 auto"
        }}>
                <div className="col-5">
                    <h2 className="pb-5 fs-3 h3" style={{ fontWeight: "400" }}>Trust with confidence</h2>
                    <h3 className="fs-5" style={{ fontWeight: "500" }}>Customer-first always</h3>
                    <p className="pe-4 pb-5">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className="fs-5" style={{ fontWeight: "500" }}>No spam or gimmicks</h3>
                    <p className="pe-4 pb-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="">Our philosophies.</a></p>
                    <h3 className="fs-5" style={{ fontWeight: "500" }}>The Zerodha universe</h3>
                    <p className="pe-4 pb-5">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className="fs-5" style={{ fontWeight: "500" }}>Do better with money</h3>
                    <p className="pe-4 pb-5">With initiatives like <a href="">Nudge</a> and <a href="">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-7 p-3">
                    <img src="media\images\ecosystem.png" alt="" style={{ width: "100%" }} />
                    <div className="text-center pt-5 fs-6">
                        <a className="pe-4" href="">Explore our products <i className="fa-solid fa-arrow-right-long "></i></a><a href="">Try Kite demo <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;