const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    cartQuantity:{
        type:Number,
        required:true,
        default:1
    },
    CreatedAt :{
        type:Date,
        default:Date.now
    }
});
const Cart = mongoose.model('Cart',cartSchema);
module.exports = Cart;