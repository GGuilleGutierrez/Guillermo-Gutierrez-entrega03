import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
            <p>Skills</p>
            <div className="skills">
                <div className="techs">
                    <div style={{width: "100%"}}>
                        <p>HTML</p>
                        <div id="progress">
                            <div id="html-js-progress"></div>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <p>CSS</p>
                        <div id="progress">
                            <div id="css-react-progress"></div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: "10px"}} className="techs">
                    <div style={{width: "100%"}}>
                        <p>JS</p>
                        <div id="progress">
                            <div id="html-js-progress"></div>
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <p>React</p>
                        <div id="progress">
                            <div id="css-react-progress"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Skills