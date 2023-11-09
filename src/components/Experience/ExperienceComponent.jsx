import './ExperienceComponent.css'

const ExperienceComponent = ({src, date, job, description }) => {
    
  return (
    <div id="adidas-desktop" className="adidas-desktop">
        <div style={{display: "flex", alignItems: "center"}}>
            <img src={src} id="img-exp1" />
            <div className="date">
              <p id="date-text1" style={{fontSize: "14px", fontWeight: "500", color: "#828282"}}>{date}</p>
              <span id="job1" style={{fontSize: "16px", fontWeight: "500"}}>{job}</span>
            </div>
        </div>
        <div className="text" style={{width: "50%"}}>
            <p id="description1" style={{fontSize: "16px", fontWeight: "500", color: "#828282"}}>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceComponent