import './Project.css';
import ProjectComponentDesk from './ProjectComponentDesk';
import ProjectComponentMob from './ProjectComponentMob'
import { useState } from 'react';
import { useEffect } from 'react';
import PROJECTS_TYPE from '../../../Constantes/ctes';

const Project = ({ typeProject }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/GGuilleGutierrez/db-portfolio-digitalers/projects')
            .then((response) => {
                if (!response.ok) throw "Ha ocurrido un error.";
                return response.json();
            })
            .then((data) => {
                switch (typeProject) {
                    case PROJECTS_TYPE.RESPONSIVE:
                        setData(data.responsive)
                        break;
                    case PROJECTS_TYPE.JS:
                        setData(data.javascript)
                        break;
                    case PROJECTS_TYPE.REACT:
                        setData(data.react)
                        break;
                    default:
                        break;
                }
            })
            .catch((error) => { console.log(error) })
    }, [typeProject])

    return (
        <>
            <div className='only-mobile'>
            {data.length > 0 && (
                <ProjectComponentMob src={data[0].src} tags={data[0].tags} title={data[0].title} text={data[0].description} />
            )}
            </div>
            <div className="only-desktop">
                {data.map(data => <ProjectComponentDesk key={data.id} src={data.src} tags={data.tags} title={data.title} text={data.description} />)}
            </div>
        </>
    )
}

export default Project