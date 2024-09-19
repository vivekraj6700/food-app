const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// This is used to parse json data coming in request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use(cookieParser());

// Routes 
const foodRoutes = require('./routes/foodRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.get('/echo', (req, res) => {
    res.send('Recived Echo!');
});

app.use("/api/v1/foods", foodRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/orders", orderRoutes);


// Error Handler
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal server error' } = err;
    res.status(status).json({ errMsg: message })
});

module.exports = app;