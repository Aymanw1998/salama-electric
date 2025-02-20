const mongoose = require('mongoose');

// Define the Meeting Schema
const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    msg:{
        type: String,
    },
    create: {
        type: Date,
        default: new Date()
    }
});

// Create the Meeting model
const Post = mongoose.model('posts', schema);

module.exports = Post;
