import './ProjectComponentMob.css'

const ProjectComponentMob = ({ src, tags, title, text }) => {
    return (
        <section className="only-mobile container">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{width: "100%"}} src={src} id="img-proj-mobile" />
                <span id="tags-mobile">{tags}</span>
            </div>
            <div className="description">
                <p id="title-proj-mobile">{title}</p>
                <p id="text-proj-mobile">{text}</p>
                <div>
                    <a href="https://www.google.com/search?q=DEMO&rlz=1C1SQJL_esAR920AR920&oq=DEMO&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIKCAIQLhixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiKBTIKCAYQLhixAxiABDINCAcQABiDARixAxiABDINCAgQLhivARjHARiABDINCAkQABiDARixAxiABNIBCTI4MTJqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><button className="develop-option1">Demo</button></a>
                    <a href="https://www.google.com/search?q=CODE&sca_esv=572214004&rlz=1C1SQJL_esAR920AR920&sxsrf=AM9HkKnxIQ8qV8QTgkHLvDjLc8ECJZJUZA%3A1696958565758&ei=ZYglZZPtLaLQ1sQP5d6k6A4&ved=0ahUKEwjTs4qk_-uBAxUiqJUCHWUvCe0Q4dUDCBA&uact=5&oq=CODE&gs_lp=Egxnd3Mtd2l6LXNlcnAiBENPREUyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMhEQLhiABBixAxiDARjHARjRAzILEAAYgAQYsQMYgwEyBRAAGIAESKwUUABY3RJwBHgBkAEAmAFeoAGcBaoBATi4AQPIAQD4AQGoAhTCAgcQIxiKBRgnwgIEECMYJ8ICBxAuGIoFGEPCAgcQABiKBRhDwgINEAAYigUYsQMYgwEYQ8ICDhAAGIAEGLEDGIMBGMkDwgIIEAAYigUYkgPCAgcQIxjqAhgnwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAeIDBBgAIEGIBgG6BgYIARABGAs&sclient=gws-wiz-serp"></a><button className="develop-option2">Code</button>
                </div>
            </div>
        </section>
    )
}

export default ProjectComponentMob