const mongoose = require("mongoose");
const User =require("../controller/user.controller")
const reviewSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    CreatedAt :{
        type:Date,
        default:Date.now
    }
})


const Reviews=mongoose.model("review",reviewSchema);
module.exports = Reviews