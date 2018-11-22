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
        const projects = this.state.projects;
        return (
            <div>
                <section id="features" className="padd-section text-center wow fadeInUp"
                         style={{visibility: 'visible', animationName: 'fadeInUp'}}>

                    <div className="container">
                        <div className="section-title text-center">
                            <h2>My Projects and Portfolio</h2>
                        </div>
                    </div>
                    <div id="projects">
                        {this.state.projects.map(project => <div className="card"><div class="card-body"><h5 class="card-title">{project.name}</h5><p class="card-text">{project.desc}</p><a href={project.url} class="btn btn-primary">View on Github</a></div></div>)}
                    </div>
                </section>
            </div>
        )
    }
}


export default ProjectsPage;
