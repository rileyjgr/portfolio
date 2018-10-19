const Contact = require('../models/contact');
const Project = require('../models/projects');

module.exports = {
    contact: async(req, res, next) =>{
        const { name, email, subject, message } = req.value.body;

        const newMessage = new Contact({name, email, subject, message});
        await newMessage.save();

        console.log(newMessage);
        res.json({message: "sent"});
        next();
    },
    postProject: async(req, res, next) => {
        const {name, title} = req.value.body;
        const newProject = new Project({name, title});
        await newProject.save();
        console.log(newProject);
        res.json({project: 'made'});
        next();
    },
    getProject: async(req, res, next) => {
        await Project.find({}, function(err, projects){
            let projectMap = {};
            projects.forEach(function(project){
                projectMap[project.name + project.title] = project;
            });
            res.json(projectMap);
        });
        next();
    }
};
