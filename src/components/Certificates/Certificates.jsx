import './Certificates.css';
import { useState } from 'react';
import { useEffect } from 'react';
import CertificateComponent from '../Certificates/CertificateComponent';

const Certificates = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/GGuilleGutierrez/db-portfolio-digitalers/certificates')
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
    <>
    <section id="certificate">
        <p id="title">Certificados</p>
        <img src="/Guillermo-Gutierrez-entrega03/cert_desk.png" alt="certificate"/><br/>
        <span style={{fontSize: "16px", fontWeight: "500"}}>Front-end Developer</span>
        <p style={{fontSize: "14px", fontWeight: "500", color: "#828282"}}>Feb 2022 - Actualidad</p>
    </section>

    <section id="certificate-desktop">
        <p id="title">Certificados</p>
        <div className="certificates">
            {data.map(data => <CertificateComponent key={data.id} src={data.src} title={data.title} date={data.date} />)}
        </div>
    </section>
    </>
  )
}

export default Certificates