import Flavoria from "../assets/flavaoria_mobile.jpg";
import Adaptix from "../assets/adaptix.png";
import SmartIvr from "../assets/smart_ivr.png";
import Gplex from "../assets/gplex.png";

import Project from "./Project.jsx";

const Projects = () => {


    const projectList = [
        {
            id: 1,
            image: Flavoria,
            title: "Flavoria Restaurent App",
            description: "Flavoria Restaurent App",
            url: "https://beta.myflavoria.fi/app/"
        },
        {
            id: 2,
            image: Adaptix,
            title: "Adaptix",
            description: "Marketing Automation Application",
            url: "https://adaptix.ai/"
        },
        {
            id: 3,
            image: SmartIvr,
            title: "Smart IVR",
            description: "Smart IVR brings Voice IVR to Web Application",
            url: "https://genuitysystems.com/smart_ivr.php"
        },
        {
            id: 4,
            image: Gplex,
            title: "Gplex Contact Center",
            description: "Web-Based Contact Center Solution",
            url: "https://gplex.com/"
        }
    ];


    return (
        <section id="projects">
            <h1 className="center mb-4">Software Projects</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {projectList.map(project => <Project key={project.id} {...project} />)}
            </div>

        </section>
    );
}

export default Projects;