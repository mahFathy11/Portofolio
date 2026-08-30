import './project-card.css';
import { useEffect, useState } from 'react';

/**
 * ProjectCard — full-width "spotlight" project card.
 *
 * Props:
 *   images      - screenshot/mockup image list for slideshow
 *   category    - small label above the title (e.g. "Featured Project")
 *   title       - project title
 *   description - short paragraph
 *   link        - project URL (external link icon shown if provided)
 *   reverse     - if true, flips the image to the right side (for zigzag rhythm)
 */
export default function ProjectCard({ images = [], category, title, description, link, reverse = false }) {
    const imageList = Array.isArray(images) && images.length > 0 ? images : [];
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!isHovering || imageList.length < 2) return undefined;

        const intervalId = window.setInterval(() => {
            setPreviousIndex(activeIndex);
            setIsAnimating(true);
            setActiveIndex((currentIndex) => (currentIndex + 1) % imageList.length);

            window.setTimeout(() => {
                setIsAnimating(false);
            }, 620);
        }, 2600);

        return () => window.clearInterval(intervalId);
    }, [activeIndex, isHovering, imageList.length]);

    const imageContent = (
        <>
            <div className="project-card-slider">
                {imageList.map((image, index) => {
                    const isCurrent = index === activeIndex;
                    const isPrevious = index === previousIndex && isAnimating;

                    return (
                        <img
                            key={`${title}-${index}`}
                            src={image}
                            alt={`${title} preview ${index + 1}`}
                            loading="lazy"
                            fetchPriority="high"
                            decoding="async"
                            width={1200}
                            height={760}
                            className={[
                                'project-card-photo',
                                isCurrent ? 'project-card-photo-active' : '',
                                isPrevious ? 'project-card-photo-exit-right' : '',
                                !isCurrent && !isPrevious ? 'project-card-photo-hidden' : '',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        />
                    );
                })}
            </div>

            {imageList.length > 1 && (
                <div className="project-card-dots" aria-label={`${title} image gallery`}>
                    {imageList.map((_, index) => (
                        <span
                            key={`${title}-${index}`}
                            className={`project-card-dot ${index === activeIndex ? 'project-card-dot-active' : ''}`}
                            aria-hidden="true"
                        />
                    ))}
                </div>
            )}
        </>
    );

    return (
        <div
            className={`project-card ${reverse ? 'project-card-reverse' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onFocus={() => setIsHovering(true)}
            onBlur={() => setIsHovering(false)}
            tabIndex={0}
        >
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-image"
                    aria-label={`Open ${title}`}
                >
                    {imageContent}
                    <span className="project-card-hover-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M7 17L17 7" />
                            <path d="M8 7h9v9" />
                        </svg>
                        <span>View Live</span>
                    </span>
                </a>
            ) : (
                <div className="project-card-image">
                    {imageContent}
                </div>
            )}

            <div className="project-card-text">
                {category && <span className="project-card-category">{category}</span>}
                <h3 className="project-card-title">{title}</h3>

                <div className="project-card-glass">
                    <p className="project-card-description">{description}</p>
                </div>

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                        aria-label={`Open ${title}`}
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}