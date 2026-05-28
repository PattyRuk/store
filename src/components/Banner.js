function Banner() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-subtitle">Welcome to MegaMarket</p>
                <h1>Elevate Your Life!</h1>
                <p className="hero-text">
                    Explore the latest items directly pulled from our global trending catalog.
                </p>
                <div className="hero-buttons">
                    <a href="#" className="btn-secondary-more" id="goMore">Explore More</a>
                </div>
            </div>

            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
        </section>
    );
}

export default Banner;