const { type } = require("express/lib/response");
const { required } = require("nodemon/lib/config");

const mongoose = required("mongoose");
mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:5,
        maxLength:30,
    }, 
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
};