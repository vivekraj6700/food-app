const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const catchAsync = require('../core/catchAsync');
const { isLoggedIn } = require('../middleware/authMiddleware');

// Get All foods
router.get('/', catchAsync(async (req, res) => {
  const foods = await Food.find({});
  res.status(200).json(foods);
}));

// Create a Food
router.post('/', catchAsync(isLoggedIn), catchAsync(async (req, res) => {
  console.log('Entry in create food');
  const { name, price, desc, imageUrl} = req.body;
  const food = await Food.create({ name, price, desc, imageUrl })
  res.status(201).json(
    {
      message: "Food Created successfully",
      foodId: food._id
    })
}));

// Get a Food
router.get('/:foodId', catchAsync(async (req, res) => {
  const { foodId } = req.params;
  const food = await Food.findById(foodId);
  res.status(200).json(food);
}));

// Update a Food
router.patch('/:foodId', catchAsync(isLoggedIn), catchAsync(async (req, res) => {
  const { foodId } = req.params;
  const { name, price, desc, imageUrl } = req.body;
  await Food.findByIdAndUpdate(foodId, { name, price, desc, imageUrl });
  res.status(200).json({ message: 'food updated successfully' });
}));

// Delete a food
router.delete('/:foodId', catchAsync(isLoggedIn), catchAsync(async (req, res) => {
  const { foodId } = req.params;
  await Food.findByIdAndDelete(foodId);
  res.status(200).json({ message: 'Food deleted successfully' });
}));

module.exports = router;