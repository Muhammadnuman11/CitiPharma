const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')
const User = require('../models/userModel')

// Get Products
// Get /api/products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
})

// Set Product
// Post /api/product
const setProduct = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please Add text field')
    }
   
    // Product already exist
    const product = await Product.findOne({number : req.body.number})
    // console.log(product)
    if (product) {
        res.status(400)
        throw new Error('Product already exist')
    }

    // Create a new product with the user ID included
    const productData = {
        ...req.body
    };
    // console.log(req.body.user.id)
    const products = await Product.create(productData)
    res.status(200).json(products)
})

// Update product
// Put /api/product:id
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(400)
        throw new Error('Product not found')
    }

    // const user = await User.findById(req.user.id)
    // // Check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // Make sure the logged in user matches the goal user
    // if (product.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not Autherized')
    // }


    const { number, name, form, potency, composition, size, rDate, nDate } = req.body;


    const updateObject = {};
    if (number) updateObject.number = number;
    if (name) updateObject.name = name;
    if (form) updateObject.form = form;
    if (potency) updateObject.potency = potency;
    if (composition) updateObject.composition = composition;
    if (size) updateObject.size = size;
    if (rDate) updateObject.rDate = rDate;
    if (nDate) updateObject.nDate = nDate;

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateObject, {
        new: true
    })

    res.status(200).json(updatedProduct)
})

// Delete Product
// Delete /api/product:id
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(400)
        throw new Error('Product not found')
    }

    // const user = await User.findById(req.user.id)
    // // Check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // // Make sure the logged in user matches the product user
    // if (product.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not Autherized')
    // }

    // await product.findByIdAndDelete()
    const deletedProduct = await Product.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json(deletedProduct)

    // res.status(200).json({ id: req.params.id })
})

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct,
}