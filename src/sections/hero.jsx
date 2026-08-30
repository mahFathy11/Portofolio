import './hero.css';
import heroBg from '../assets/hero2.jpg';
import heroImage from '../assets/hero-image.png';
import Typewriter from '../component/Typewriter.jsx';

export default function Hero() {
    return (
        <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
           <div className="my-data">
                <div className="hero-content">
                    <h1>Turning Ideas Into Interfaces</h1>
                    <p>Frontend developer crafting clean, responsive web experiences with React.</p>

                    <div className="hero-actions">
                        <a href="/Web-CV.pdf" download="Mahmoud-Fathy-CV.pdf" className="cv-button">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-greeting">Hello! I Am <span>Mahmoud Fathy</span></div>
                    <img
                        src={heroImage}
                        alt="Portrait of Mahmoud Fathy, frontend developer"
                        width={700}
                        height={700}
                        fetchPriority="high"
                        decoding="async"
                    />
                </div>
           </div>

            <h2 className="hero-typewriter">
                I'm a <Typewriter words={["Frontend Developer !!", "React Developer !!"]} />
            </h2>
        </section>
    );
}