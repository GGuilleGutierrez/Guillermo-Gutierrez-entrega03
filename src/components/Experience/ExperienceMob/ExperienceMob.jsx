import './ExperienceMob.css';

const ExperienceMob = () => {
  return (
    <section id="experience-mobile">
        <p>Experiencia</p>
        <div className="adidas">
            <div className="date">
                <img src="../../assets/adidas.png" alt="adidas" />
                <p style={{fontSize: "14px", fontWeight: "500", color: "#828282"}}>Feb 2022 - Actualidad</p>
                <span style={{fontSize: "16px", fontWeight: "500"}}>Front-end Developer</span>
            </div>
            <div className="text">
                <p style={{fontSize: "16px", fontWeight: "500", color: "#828282"}}>Lorem ipsum dolor sit amet consectetur.
                    Eget nulla eu cursus cursus pretium eu. Eget vestibulum quam aliquet.</p>
            </div>
        </div>
    </section>
  )
}

export default ExperienceMob
