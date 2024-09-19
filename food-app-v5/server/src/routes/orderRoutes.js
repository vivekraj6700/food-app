const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/authMiddleware');
const catchAsync = require('../core/catchAsync');
const Order = require('../models/Order');

router.post('/', catchAsync(isLoggedIn), catchAsync(async (req, res) => {
    const { userId } = req;
    const { items } = req.body;

    const order = await Order.create({ userId: userId, items: items });
    res.status(200).json({
        message: 'Order placed successfully',
        orderId: order._id
    })
}))


module.exports = router;