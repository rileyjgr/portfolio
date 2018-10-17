const Contact = require('../models/contact');

module.exports = {
    contact: async(req, res, next) =>{
        const { name, email, subject, message } = req.value.body;

        const newMessage = new Contact({name, email, subject, message});
        await newMessage.save();

        console.log(newMessage);
        res.json({message: "sent"});
        next();
    }
};
