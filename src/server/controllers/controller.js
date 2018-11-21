const Contact = require('../models/contact');
const Project = require('../models/projects');
const axios = require('axios');
const githubApiFilter = require('./githubApiFilter')
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
    getProject: async(app, req, res, next) => {
        const access_token = process.env.GITHUB_ACCESS_TOKEN;
            axios.get('https://api.github.com/users/rileyjgr/repos?access_token='+ access_token)
            .then((response)=>{
                const projectData = response.data;
                let {name, desc, url} ='';

                const project = {name, desc, url};
                for(let key in projectData){
                    name = projectData[key].name;
                    desc = projectData[key].description;
                    url = projectData[key].url;
                    const foundProject = Project.findOne({name});
                    console.log({name, desc, url});
                    if(foundProject){
                    } else {
                        const newProject = new Project({name, desc, url});
                        const generateNewProject = async(newProject)=> {
                            console.log(newProject)
                            await newProject.save();
                        }
                    }
                }
            }).catch((error)=>{
                console.log(error);
            });
        
        const projects = Project.findOne({});
        console.log(projects);
        await res.json(projects);
    }
};
