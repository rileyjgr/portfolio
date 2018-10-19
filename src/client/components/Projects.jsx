import React, {Component} from 'react';
import axios from 'axios';
class Projects extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }

    }

    componentDidMount() {
        axios.get('/api/projects')
            .then(results => {
                console.log(results);
                console.log(results.data);
                let projects = Object.keys(results.data).forEach(project =>{
                    console.log('data here ; ', project);
                    return(
                            <div className="feature-block">
                                <h4 text={project}/>
                                <p text={project}/>
                            </div>
                    )
                });
                console.log(projects);
                this.setState({projects: projects});
                console.log("state", this.state.projects);

            })
    }
    render() {
        console.log('my state ', this.state);
        return (
            <div className="row">
                <div className="col-md-6 col-lg-3" id="projectList">
                    {this.state.projects};
                </div>
            </div>
        )
    }
}

export default Projects;


