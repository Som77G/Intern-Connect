require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
const {query}  = require('./dbconfig/dbconfig');

// Routes
app.get('/', async(req, res) => {
    // res.send('Hello, World!');

    try {
        const queryi= `
        SELECT * FROM users_student
        `
        
        const users = await query({
            query: queryi,
            values:[]
        });
        
        res.json(users);
    } catch (error) {
        console.log("helllo error")
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
