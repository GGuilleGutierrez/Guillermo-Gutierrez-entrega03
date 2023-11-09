import PROJECTS_TYPE from '../../Constantes/ctes';
import './BtnsProjects.css';
import Project from './Project/Project';
import { useState } from 'react';

const Projects = () => {
    const [typeProject, setType] = useState(PROJECTS_TYPE.RESPONSIVE);

    return (
        <>
            <section id="projects">
                <p>Proyectos(3)</p>
                <div className="projects">
                    <button onClick={() => setType(PROJECTS_TYPE.RESPONSIVE)} autoFocus id="projects-option">Responsivo</button>
                    <button onClick={() => setType(PROJECTS_TYPE.JS)} id="projects-option">JavaScript</button>
                    <button onClick={() => setType(PROJECTS_TYPE.REACT)} id="projects-option">React</button>
                </div>
            </section>
            <Project typeProject={typeProject}/>
        </>
    )
}

export default Projects