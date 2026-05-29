import StoreMap from '../components/StoreMap';

function About() {
    const teamMembers = [
        { id: 1, name: "Robert", role: "Front-End Developer" },
        { id: 2, name: "Sarah", role: "UI Designer" },
        { id: 3, name: "Michael", role: "Back-End Support" }
    ];

    return (
        <section>
            <h1>About Our Store</h1>

            <p>We are committed to providing quality products and exceptional customer service.</p>

            <h2>Our Location</h2>
            <StoreMap />

            <h2>Meet The Team</h2>

            {teamMembers.map(member => (
                <div key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </section>
    );
}

export default About;