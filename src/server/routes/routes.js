const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/controller');
module.exports = {
    app: async(app)=>{
        app.use(bodyParser.json());
        app.post('/contact', controllers.contact);

        app.get('/api/projects', controllers.getProject(app));
        
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    }
};
