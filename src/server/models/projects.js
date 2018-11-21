const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    title: String,
    repo_url: String
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;

