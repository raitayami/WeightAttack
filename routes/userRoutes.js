const express = require('express');

const router = express.Router();

const User = require('../models/user')

router.post('/signup', async (req, res) => {

    const {
        username,
        fullName,
        email,
        password,
        retypePassword
    } = req.body

    try {
        const newUser = new User({
            username, 
            fullName,
            email,
            password,
            retypePassword
        })

        await newUser.save();
        
        res.status(201).json({
            message: 'Form data received successfully'
        })
    }
    catch{
        res.status(400).json({
            error: "Error creating user: " + error.message
        })
    }
})

module.exports = router;