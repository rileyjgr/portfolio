const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    title: String
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;

