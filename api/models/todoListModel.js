'use strict';
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let TaskSchema = new Schema({
    task: {
        type: String,
        required: 'What is your task?'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['todo', 'ongoing', 'completed']
        }],
        default: ['todo']
    },

})

module.exports = mongoose.model('Tasks', TaskSchema)