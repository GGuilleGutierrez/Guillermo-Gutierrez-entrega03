import ExperienceComponent from '../ExperienceComponent';
import { useState } from 'react';
import { useEffect } from 'react';

const ExperienceDesk = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/GGuilleGutierrez/db-portfolio-digitalers/experience')
    .then((response) => {
      if (!response.ok) throw "Ha ocurrido un error.";
      return response.json();
    })
    .then((data) => { 
      setData(data);
    })
    .catch((error) => {console.log(error)});
  }, [])
  
  return (
    <section id="experience-desktop">
        <p>Experiencia</p>
        {data.map(data => <ExperienceComponent key={data.id} src={data.src} date={data.date} job={data.job} description={data.description} />)}
    </section>
  )
}
export default ExperienceDesk