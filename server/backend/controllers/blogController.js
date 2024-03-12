const asyncHandler = require('express-async-handler')

const Blog = require('../models/blogModel')

// Get Blog
// Get /api/blogs
const getBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
})

// Get Blog by Id
// Get /api/blogs:id
const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id); // Fetch blog by its _id
    if (blog) {
        res.status(200).json(blog); // If blog found, return it
    } else {
        res.status(404); // If blog not found, return 404 status
        throw new Error('Blog not found');
    }
});

// Set Blog
// Post /api/blog
const setBlog = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please Add text field')
    }

    // Blog already exist
    const blog = await Blog.findOne({ title: req.body.title })
    // console.log(blog)
    if (blog) {
        res.status(400)
        throw new Error('Blog already exist')
    }

    // Create a new blog with the user ID included
    const blogData = {
        ...req.body
    };
    // console.log(req.body.user.id)
    const blogs = await Blog.create(blogData)
    res.status(200).json(blogs)
})

// Update blog
// Put /api/blog:id
const updateBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
        res.status(400)
        throw new Error('Blog not found')
    }

    // const user = await User.findById(req.user.id)
    // // Check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // Make sure the logged in user matches the goal user
    // if (blog.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not Autherized')
    // }


    const { title, shortDesc, desc } = req.body;


    const updateObject = {};
    if (title) updateObject.title = title;
    if (shortDesc) updateObject.shortDesc = shortDesc;
    if (desc) updateObject.desc = desc;

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateObject, {
        new: true
    })

    res.status(200).json(updatedBlog)
})

// Delete Blog
// Delete /api/blog:id
const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
        res.status(400)
        throw new Error('Blog not found')
    }

    // const user = await User.findById(req.user.id)
    // // Check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // // Make sure the logged in user matches the blog user
    // if (blog.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not Autherized')
    // }

    // await blog.findByIdAndDelete()
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json(deletedBlog)

    // res.status(200).json({ id: req.params.id })
})

module.exports = {
    getBlogs,
    getBlogById,
    setBlog,
    updateBlog,
    deleteBlog,
}