const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a blog title']
    },
    shortDesc: {
        type: String,
        required: [true, 'Please add a blog short decs']
    },
    desc: {
        type: String,
        required: [true, 'Please add a blog ddecs']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)