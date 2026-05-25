function Banner() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-subtitle">Welcome to Shop</p>
                <h1>Have a confident, minimalism, and vibrant life</h1>
                <p className="hero-text">
                Explore your favorite clothes.
                </p>
                <div className="hero-buttons">
                    <a href="#" className="btn-primary-about" id="openAbout">About</a>
                    <a href="#" className="btn-secondary-more" id="goMore">Explore More</a>
                </div>
            </div>

            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </section>
    );
}

export default Banner;