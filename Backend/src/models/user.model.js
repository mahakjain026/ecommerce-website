const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true , "First Name is Required"]
    } ,
    lastName : {
        type :String , 
        required : [ true , "Last Name is Required"],
    },
    Email : {
        type : String,
        required : [true , "Email is Required"],
        lowercase : true ,  
    },
    Password : {
        type :String ,
        required : [true , "Password is Required"],
        unquie:true,
    },
}) ; 

UserSchema.pre("save",async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.Password , salt);
        this.Password= hashPassword;
        next();
    }
    catch(error){
        next(error);
    }
});

const User = mongoose.model('User' , UserSchema);

module.exports = User;