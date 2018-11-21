const Contact = require('../models/contact');
const Project = require('../models/projects');
const axios = require('axios');
const JSON = require('circular-json');
require('dotenv').config();

module.exports = {
    contact: async(req, res, next) =>{
        const { name, email, subject, message } = req.value.body;

        const newMessage = new Contact({name, email, subject, message});
        await newMessage.save();
        console.log(newMessage);
        res.json({message: "sent"});
        next();
    },
    getProject: async(req, res, next) => {
        const access_token = process.env.GITHUB_ACCESS_TOKEN;
            axios.get('https://api.github.com/users/rileyjgr/repos')
            .then((response)=>{
                const projectData = response.data;
                let {name, desc, url} ='';

                const project = {name, desc, url};
                for(let key in projectData){
                    name = projectData[key].name;
                    desc = projectData[key].description;
                    url = projectData[key].url;
                    // determing if it exists or not is not working yet. Would be better to just do this before the call. 
                    // const foundProject = Project.findOne({name});
                    // if (foundProject) {
                    //     console.log('Project already Exists' + foundProject);
                    // } else {
                    //     const newProject = new Project({name, desc, url});
                    //     newProject.save();
                    // }
                    const newProject = new Project({name, desc, url});
                    newProject.save();
                }
            }).catch((error)=>{
                console.log(error);
            });
        

        await Project.find({}, (err, projects)=>{
            console.log(projects);
            let api = {};
            projects.forEach((project)=>{
                api[project.name] = project;
            });
           res.send(api);
        });
        next();

    }
};
