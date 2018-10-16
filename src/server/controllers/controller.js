const Contact = require('../models/contact');
const path = require('path');
const joi = require('joi');

module.exports = {
    contact: async(req, res) =>{
        const { name, email, subject, message } = req.body;

        const newMessage = new Contact({name, email, subject, message});
        await newMessage.save();

        console.log(newMessage);
        return res.json({message: "sent"});
    }
};
