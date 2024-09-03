const Order = require("../models/order.model");

const createOrder = async (req, res) => {
    try {
        const {
            userId,
            products,
            totalAmount,
            ShippingAddress,
            contactNumber,
        } = req.body;
        if (
            !userId ||
            !products ||
            !totalAmount ||
            !ShippingAddress ||
            !contactNumber
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const order = new Order({
            userId,
            products,
            totalAmount,
            ShippingAddress,
            contactNumber
        });

        const savedOrder = await order.save();
        return res
            .status(201)
            .json({ message: "Order created successfully", order: savedOrder });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const getOrderByUserId = async (req, res) => {
    try {
        const order = await Order.findOne(req.param.userId).populate(
            "products.productId"
        );
        return res.status(200).json({ message: order });
    } catch (error) {
        console.log("error",error)
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById({ _id: req.param.id }).populate(
            "products.productId"
        );
        return res.status(200).json({ message: order });
    } catch (error) {
        console.log("error",error)
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true };
        const updatedOrder = await Order.findByIdAndUpdate( id , updates, options)
        if (!updatedOrder) {
            return res.status(400).json({ message: "Order is not Updated" })
        }
        res.status(200).json(message = { updatedOrder });
    } catch (error) {
        console.log("error",error)
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const id = req.param.id;
        const deletedOrder =await Order.findOneAndDelete(id)
        if (!deletedOrder) {
            res.status(404).json({ message: "Order not Found" });
        }
        return res.status(200).json({ message: "Order is Deleted Successfully!" });
    } catch (error) {
        console.log("error",error)
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { createOrder, getOrderByUserId, getOrderById, updateOrder, deleteOrder };
