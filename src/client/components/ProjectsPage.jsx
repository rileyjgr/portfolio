import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import Projects from "./Projects";
class ProjectsPage extends Component {
    constructor(){
        super();

    }

    render() {
        return (
            <div>
                <section id="features" className="padd-section text-center wow fadeInUp"
                         style={{visibility: 'visible', animationName: 'fadeInUp'}}>

                    <div className="container">
                        <div className="section-title text-center">
                            <h2>My Projects / Things I have worked on.</h2>
                        </div>
                    </div>

                    <div className="container">
                    <Projects/>
                </div>
                </section>
            </div>
        )
    }
}


export default ProjectsPage;
