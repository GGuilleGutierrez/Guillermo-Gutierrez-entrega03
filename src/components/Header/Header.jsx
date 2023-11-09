import './Header.css';

const header = () => {

    return (
        <header id="header" className="container">
            <div className="img"></div>
            <div className="personal-info">
                <div className="name">
                    <h1>Nombre</h1>
                    <p>Front-end developer</p>
                </div>
                <div className="contact">
                    <span><svg width="800px" height="800px" viewBox="0 -3.5 32 32" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns: sketch="http://www.bohemiancoding.com/sketch/ns">

                        <title>mail</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs>

                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                            sketch: type="MSPage">
                            <g id="Icon-Set-Filled" sketch: type="MSLayerGroup"
                                transform="translate(-414.000000, -261.000000)" fill="#000000">
                                <path
                                    d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                                    id="mail" sketch: type="MSShapeGroup">

                                </path>
                            </g>
                        </g>
                    </svg>ejemplo@mail.com</span>
                    <span><svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
                    </svg> +54 9 11-1234-5678</span>
                </div>
                <div className="aboutme">
                    <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
                </div>
            </div>
        </header>
    )
}

export default header
