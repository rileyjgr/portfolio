const Contact = require('../models/contact');
const path = require('path');
const joi = require('joi');

module.exports = {
    contact: async(req, res) =>{
        const { name, email, message } = req.body;

        const newMessage = new Contact({name, email, message});
        await newMessage.save();

        console.log(newMessage);
        return res.json({message: "sent"});

    }
};
