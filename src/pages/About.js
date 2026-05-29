import "../styles/about.css";

function About() {
    const features = [
        {
            title: "Premium Products",
            description: "Carefully selected products designed for quality and performance."
        },
        {
            title: "Fast Delivery",
            description: "Reliable shipping to get your order to you quickly."
        },
        {
            title: "Customer Support",
            description: "Dedicated support whenever you need assistance."
        }
    ];

    const teamMembers = [
        { id: 1, name: "Patrick", role: "Front-End Developer" },
        { id: 2, name: "Weiyu", role: "UI Designer" },
        { id: 3, name: "Ivan", role: "Back-End Support" }
    ];

    return (
        <main className="about">
            <section className="about-hero">
                <h1>About MEGAMARKET</h1>
                <p>
                    Inspired by modern brands, MEGAMARKET delivers
                    quality products, innovative designs, and an exceptional
                    shopping experience.
                </p>
            </section>

            <section className="about-story">
                <h2>Our Story</h2>
                <p>
                    Founded with a passion for style, performance, and innovation,
                    MegaMarket was created to bring premium shopping experiences
                    directly to customers.
                </p>
                <p>
                    What started as a small project has evolved into a
                    modern online marketplace focused on providing
                    customers with products they can trust.
                </p>
                <p>
                    Our team believes that shopping should be simple,
                    enjoyable, and accessible to everyone.
                    Through innovation and customer-focused design, our mission
                    is to build a trusted online shopping destination.
                </p>
            </section>

            <section className="mission">
                <div>
                    <h2>Our Mission</h2>
                    <p>
                        To provide high-quality products while delivering a seamless
                        shopping experience.
                    </p>
                </div>

                <div>
                    <h2>Our Vision</h2>
                    <p>
                        To become one of the most trusted and customer-focused
                        online stores.
                    </p>
                </div>
            </section>

            <section>
                <h2>Why Shop With Us?</h2>
                <div className="features">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="stats">
                <div className="stat-card">
                    <h2>10K+</h2>
                    <p>Happy Customers</p>
                </div>

                <div className="stat-card">
                    <h2>500+</h2>
                    <p>Products Available</p>
                </div>

                <div className="stat-card">
                    <h2>24/7</h2>
                    <p>Customer Support</p>
                </div>

                <div className="stat-card">
                    <h2>99%</h2>
                    <p>Customer Satisfaction</p>
                </div>
            </section>
        </main>
    );
}

export default About;