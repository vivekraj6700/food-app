const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    items: [
        {
            id: String,
            foodName: String,
            price: Number,
            qty: Number,
            _id: false
        }
    ]

}, { timestamps: true, versionKey: false });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;