import React, {Component} from 'react';
import axios from 'axios';
class ProjectsPage extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios.get(`/api/projects`)
          .then(async(res) => {
            const projectData = res.data;
            let {name, desc, url} ='';
            const project = {name, desc, url};
            let projectsArray = [];
            for(let key in projectData){
                name = projectData[key].name;
                desc = projectData[key].desc;
                url = projectData[key].url;
                const newProject = {name, desc, url};
                projectsArray.push(newProject);
            }
            this.setState({projects: projectsArray});
          }).catch(err =>{
              console.log(err);
          })
      }
    render() {
        console.log(this.state.projects);  
        return (
            <div>
                <section id="features" className="padd-section text-center wow fadeInUp"
                         style={{visibility: 'visible', animationName: 'fadeInUp'}}>

                    <div className="container">
                        <div className="section-title text-center">
                            <h2>My Projects / Things I have worked on. (Please note this page is still underdevelopment)</h2>
                        </div>
                    </div>
                </section>
                <div id="projects">
                    {this.state.projects.map(project => <div><p>-----</p><li>{project.name}</li><li>{project.desc}</li><a href={project.url}>View on Github</a><p>-----</p></div>)}
                </div>
                {/* <div id="Animator">
                    <h1>{this.state.projects.animator}</h1>
                    <h3>{this.state.projects.animator.desc}</h3>
                    <a href={this.state.projects.animator.url}>View on Github</a>
                </div>
                <div id="ImpactApi">
                    <h1>{this.state.projects.astapi.name}</h1>
                    <h3>{this.state.projects.astapi.desc}</h3>
                    <a href={this.state.projects.astapi.url}>View on Github</a>
                </div>
                <div id="basic-gif-page">
                    <h1>{this.state.projects.basic-gif-page.name}</h1>
                    <h3>{this.state.projects.basic-gif-page.desc}</h3>
                    <a href={this.state.projects.basic-gif-page.url}>View on Github</a>
                </div>
                <div id="basic-rpg">
                    <h1>{this.state.projects.basic-rpg.name}</h1>
                    <h3>{this.state.projects.basic-rpg.desc}</h3>
                    <a href={this.state.projects.basic-rpg.url}>View on Github</a>
                </div>
                <div id="clickygame">
                    <h1>{this.state.projects.clickygame.name}</h1>
                    <h3>{this.state.projects.clickygame.desc}</h3>
                    <a href={this.state.projects.clickygame.url}>View on Github</a>
                </div>  */}
            </div>
        )
    }
}


export default ProjectsPage;
