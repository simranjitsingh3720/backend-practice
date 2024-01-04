const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
});


//model-create
const user = mongoose.model("user", userSchema);


module.exports = user;