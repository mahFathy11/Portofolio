import './about.css';

export default function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>

            <div className="about-content">
                <p className="about-text">
                    I care about the details most people skip — spacing, transitions,
                    the moment a button feels right under your cursor. React and
                    clean CSS are just the tools I use to get there.
                </p>

                <div className="about-stats">
                    <div className="stat">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects Built</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">React</span>
                        <span className="stat-label">Core Stack</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Hand-Written CSS</span>
                    </div>
                </div>
            </div>
        </section>
    );
}