import './skills.css';
import { Atom, Box, Braces, Code2, GitBranch, GitFork, Palette } from 'lucide-react';

export default function Skills(){

    let mySkills=[
        {name:"HTML", icon:Code2,id:1},
        {name:"CSS", icon:Palette,id:2},
        {name:"JavaScript", icon:Braces,id:3},
        {name:"Bootstrap", icon:Box,id:4},
        {name:"GitHub", icon:GitFork,id:6},
        {name:"React", icon:Atom,id:7},
    ]

    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {mySkills.map((skill) => (
                    <div key={skill.id} className="skill">
                        <skill.icon className="skill-icon" aria-hidden="true" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}