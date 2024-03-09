const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// Set Users
// Post /api/users
const registerUser = asyncHandler(async (req, res) => {
    let { name, email, password } = req.body
    name = name.trim();
    email = email.trim();
    if (!name || !email || !password) {
        res.status(400)
        console.log('error')
        throw new Error('Please add all fields')
    }

    // Check If user exists
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exsits')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword)
    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user Data')
    }
})

// Authenticate a User
// Post /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Check for email
    const user = await User.findOne({ email })
    // Check for Password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid email/password')
    }
})

// Get Users data
// Get /api/users/me
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30days'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,

}