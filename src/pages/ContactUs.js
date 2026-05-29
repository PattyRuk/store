import '../styles/about.css'

function ContactUs() {
    const teamMembers = [
        { id: 1, name: "Patrick", role: "Front-End Developer" },
        { id: 2, name: "Weiyu", role: "UI Designer" },
        { id: 3, name: "Ivan", role: "Back-End Support" }
    ];

    return (
        <main className="about">
            <section>
                <h2>Meet Our Team</h2>

                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    Have a question or suggestion? We'd love to hear from you.
                </p>

                <form className="contact-form">
                    <input type="text" placeholder="Full Name" required/>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="text" placeholder="Subject"/>

                    <textarea rows="6" placeholder="Your Message" required></textarea>

                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
}

export default ContactUs;