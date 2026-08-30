import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-inner">
                <h1 className="logo">Mahmoud Fathy</h1>

                <ul className="nav-links">
                    <li><a className="active" href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}