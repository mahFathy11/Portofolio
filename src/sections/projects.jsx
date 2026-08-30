import ProjectCard from '../component/projectCard';
import './projects.css';
import networkOptimizer from '../assets/network-optimizer.jpg';
import network1 from '../assets/network1.jpg';
import network2 from '../assets/network2.jpg';
import network3 from '../assets/network3.jpg';
import network4 from '../assets/network4.jpg';
import toDoList from '../assets/to-do.jpg';
import todo2 from '../assets/todo2.jpg';
import weatherApp from '../assets/weather-app.png';
import weather2 from '../assets/weather2.jpg';
import typingSpeed from '../assets/typing-speed.jpg';
import typing2 from '../assets/typing2.jpg';

const projects = [
    {
        category: 'Featured Project',
        title: 'Network Optimizer — Process Engineering',
        description:
            'A unified toolset for Heat Exchanger Network Synthesis and Hydrogen Pinch Analysis — MINLP-based optimization wrapped in a clean, module-based interface.',
        images: [networkOptimizer, network1, network2, network3, network4],
        link: 'https://new-network-program.vercel.app/',
    },
    {
        category: 'React App',
        title: 'To-Do List',
        description:
            'A task management app built with React, covering full CRUD functionality and component-level state management.',
        images: [toDoList, todo2],
        link: 'https://to-do-list-by-react-pink.vercel.app/',
    },
    {
        category: 'API Integration',
        title: 'Weather App',
        description:
            'A fully right-to-left Arabic weather app with live data and a gradient-driven interface — built to feel native, not translated.',
        images: [weatherApp, weather2],
        link: 'https://weather-app-eta-black-35.vercel.app/',
    },
    {
        category: 'Vanilla JavaScript',
        title: 'Typing Speed Test',
        description:
            'A challenge-based typing game with difficulty levels, a countdown timer, and real-time score tracking — pure DOM manipulation, no frameworks.',
        images: [typingSpeed, typing2],
        link: 'https://mahfathy11.github.io/Writting-Speed/',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Featured Work</h2>

            {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} reverse={index % 2 === 1} />
            ))}
        </section>
    );
}