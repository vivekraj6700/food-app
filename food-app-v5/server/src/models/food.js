const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    price: Number,
    desc: String,
    imageUrl: String
},{timestamps: true, versionKey: false});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
