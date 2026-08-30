import './SectionDots.css';

/**
 * SectionDots — fixed vertical dot navigation on the right edge of the
 * screen. Each dot maps to a section id; hovering a dot reveals its
 * label, and clicking it smooth-scrolls to that section. No active/
 * current-section tracking — purely click + hover navigation.
 *
 * Usage:
 *   <SectionDots sections={[
 *     { id: 'hero', label: 'Home' },
 *     { id: 'about', label: 'About' },
 *     { id: 'skills', label: 'Skills' },
 *     { id: 'projects', label: 'Projects' },
 *     { id: 'contact', label: 'Contact' },
 *   ]} />
 */
export default function SectionDots({ sections }) {
    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="section-dots" aria-label="Page sections">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className="section-dot"
                    onClick={() => handleClick(section.id)}
                    aria-label={`Go to ${section.label}`}
                >
                    <span className="section-dot-label">{section.label}</span>
                    <span className="section-dot-circle" />
                </button>
            ))}
        </nav>
    );
}