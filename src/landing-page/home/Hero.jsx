function Hero() {
    return (
        <div className="text-center  p-5" style={{ height: "100dvh" }}>
            <div className="container" style={{ padding: "4.5rem" }}>
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-3" style={{ maxWidth: "100%", maxHeight: "45vh" }} />
                <h1 className="mt-5">Invest in everything</h1>
                <p style={{
                    fontSize: "1.25rem",
                    fontWeight: "400",
                    marginTop: "10px"
                }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary mt-4 fs-5" style={{ width: "17%", borderRadius: "3px", backgroundColor: "#387ed1" }}>Sign up for free</button>
            </div>
        </div >
    );
}

export default Hero;