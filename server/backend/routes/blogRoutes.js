const express = require('express')
const router = express.Router()
const {
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog,
    getBlogById
} = require('../controllers/blogController')

router.route('/').get(getBlogs).post(setBlog)
router.route('/:id').put(updateBlog).delete(deleteBlog).get(getBlogById)

module.exports = router