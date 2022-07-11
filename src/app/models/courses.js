const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: 'string', default: ''},
    description: { type: 'string', default: ''},
    img: { type: 'string', default: ''},
})

module.exports = mongoose.model('Course', Course);