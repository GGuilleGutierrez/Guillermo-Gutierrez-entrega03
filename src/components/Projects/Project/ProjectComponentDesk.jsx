import './ProjectComponentDesk.css';

const ProjectComponent = ({ src, tags, title, text }) => {
    return (
        <section id="develop" className="container">
            <img src={src} className="develop-img" />
            <div className="description">
                <span id="tags">{tags}</span>
                <p id="title-proj">{title}</p>
                <p id="text">{text}</p>
                <div>
                    <a href="https://www.google.com/search?q=DEMO&rlz=1C1SQJL_esAR920AR920&oq=DEMO&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIKCAIQLhixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiKBTIKCAYQLhixAxiABDINCAcQABiDARixAxiABDINCAgQLhivARjHARiABDINCAkQABiDARixAxiABNIBCTI4MTJqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><button className="develop-option1">Demo</button></a>
                    <a href="https://www.google.com/search?q=CODE&sca_esv=572214004&rlz=1C1SQJL_esAR920AR920&sxsrf=AM9HkKnxIQ8qV8QTgkHLvDjLc8ECJZJUZA%3A1696958565758&ei=ZYglZZPtLaLQ1sQP5d6k6A4&ved=0ahUKEwjTs4qk_-uBAxUiqJUCHWUvCe0Q4dUDCBA&uact=5&oq=CODE&gs_lp=Egxnd3Mtd2l6LXNlcnAiBENPREUyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMhEQLhiABBixAxiDARjHARjRAzILEAAYgAQYsQMYgwEyBRAAGIAESKwUUABY3RJwBHgBkAEAmAFeoAGcBaoBATi4AQPIAQD4AQGoAhTCAgcQIxiKBRgnwgIEECMYJ8ICBxAuGIoFGEPCAgcQABiKBRhDwgINEAAYigUYsQMYgwEYQ8ICDhAAGIAEGLEDGIMBGMkDwgIIEAAYigUYkgPCAgcQIxjqAhgnwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAeIDBBgAIEGIBgG6BgYIARABGAs&sclient=gws-wiz-serp"><button className="develop-option2">Code</button></a>
                </div>
            </div>
        </section>
    )
}

export default ProjectComponent