const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            cardQuantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    ShippingAddress: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: [true, "Contact Number is required"],
        validate: {
            validator: function (y) {
                return /^(\+\d{1,3})?(\d{7,15})$/.test(y);
            },
            message: (props) => `${props.value} is not a valid Phone number`,
        },
    },
    status: {
        type: String,
        required: true,
        enum: [
            "Pending",
            "Processing",
            "Shipped",
            "Delivered",
            "Returned",
            "Cancelled",
            "Confirmed",
        ],
        default: "Processing",
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

 const Orders = mongoose.model("order" , orderSchema)
 module.exports = Orders;
