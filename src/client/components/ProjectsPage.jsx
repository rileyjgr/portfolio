import React, {Component} from 'react';
class ProjectsPage extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    'name':'chime',
                    'url':'https://chime-bot.herokuapp.com',
                    'desc':'Company Assistant',
                    'github':'https://github.com/rileyjgr/chime'
                },
                {
                    'name': 'Animator',
                    'url':'http://animat.herokuapp.com',
                    'desc':'Text to speech Social Media',
                    'github':'https://github.com/rileyjgr/animator'
                },
                {
                    'name':'Asteriod Impact Api',
                    'url':'https://teasteroidm-api.herokuapp.com',
                    'desc':'Asteriod Impact data using JPLS api.',
                    'github':'https://github.com/rileyjgr/astapi'
                }
            ]
        }
    }

    render() {
        console.log(this.state);    
        return (
            <div>
                <section id="features" className="padd-section text-center wow fadeInUp"
                         style={{visibility: 'visible', animationName: 'fadeInUp'}}>

                    <div className="container">
                        <div className="section-title text-center">
                            <h2>My Projects / Things I have worked on.</h2>
                        </div>
                    </div>
                    <div className="projects">
                    <div id="chime">
                        <h1>{this.state.projects[0].name}</h1>
                        <h3>{this.state.projects[0].desc}</h3>
                        <a href={this.state.projects[0].url}>Website</a>
                        <a href={this.state.projects[0].github}>Github</a>
                    </div>
                    <div id="Animator">
                        <h1>{this.state.projects[1].name}</h1>
                        <h3>{this.state.projects[1].desc}</h3>
                        <a href={this.state.projects[1].url}>Website</a>
                        <a href={this.state.projects[1].github}>Github</a>
                    </div>
                    <div id="ImpactApi">
                        <h1>{this.state.projects[2].name}</h1>
                        <h3>{this.state.projects[2].desc}</h3>
                        <a href={this.state.projects[2].url}>Website</a>
                        <a href={this.state.projects[2].github}>Github</a>
                    </div>
                    
                    </div>
                </section>
            </div>
        )
    }
}


export default ProjectsPage;
