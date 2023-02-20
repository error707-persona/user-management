const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },

   
});


module.exports = mongoose.model('accounts', userSchema); //change according to schema name 

