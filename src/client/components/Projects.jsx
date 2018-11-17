import React, {Component} from 'react';
class Projects extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    'name':'chime',
                    'url':'https://chime-bot.herokuapp.com',
                    'desc':'Company Assistant'
                },
                {
                    'name': 'Animator',
                    'url':'http://animat.herokuapp.com',
                    'desc':'Text to speech Social Media'
                },
                {
                    'name':'Asteriod Impact Api',
                    'url':'https://teasteroidm-api.herokuapp.com',
                    'desc':'Asteriod Impact data using JPLS api.'
                }
            ]
        }
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


