const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers/controller');
const { validateBody, schemas } = require('../helpers/validate');
module.exports = {
    react: async(app) => {
        app.use(bodyParser.json());
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    contact: async(app)=> {
        app.post('/contact', validateBody(schemas.contact), controllers.contact);
    }
};
