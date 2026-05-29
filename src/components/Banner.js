function Banner() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-subtitle">Welcome to <span>MEGA</span>MARKET</p>
                <p className="hero-text">
                    Explore the latest items from our trending catalog.
                </p>
                <div className="hero-buttons">
                    <a href="#categories" className="btn-secondary-more" id="goMore">Explore More</a>
                </div>
            </div>

            <div className="hero-image">
                <img src="https://thumbs.dreamstime.com/b/vibrant-shopping-mall-scene-colorful-sale-banners-discount-signs-variety-bags-foreground-blurred-crowd-334297012.jpg"/>
            </div>
        </section>
    );
}

export default Banner;