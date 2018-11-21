const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    desc: String,
    url: String
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;

