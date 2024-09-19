const express = require('express');
const catchAsync = require('../core/catchAsync');
const router = express.Router();
const User = require('../models/user');
const { isLoggedIn } = require('../middleware/authMiddleware');

router.get('/profile', catchAsync(isLoggedIn), catchAsync(async (req, res) => {
    const { userId } = req;
    const user = await User.findById(userId);
    res.status(200).json({
        username: user.username,
        email: user.email,
        userId: user._id
    })
}));

module.exports = router;