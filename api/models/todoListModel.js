'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name:{
        type: String,
        required:'Please enter a task'
    },
    due_date:{
        type: Date,
    },
    status: {
        type:[{
            type: String,
            enum:['todo','done']
        }],
        default:['todo']
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);