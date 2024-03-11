const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    number: {
        type: String,
        required: [true, 'Please add a reg. number']
    },
    name: {
        type: String,
        required: [true, 'Please add a product name']
    },
    form: {
        type: String,
        required: [true, 'Please add a  dosage name']
    },
    potency: {
        type: String,
        required: [true, 'Please add a potency']
    },
    composition: {
        type: String,
        required: [true, 'Please add a composition']
    },
    size: {
        type: String,
        required: [true, 'Please add a pack size']
    },
    rDate: {
        type: String,
        required: [true, 'Please add a Reg. Date/ Renewal Date']
    },
    nDate: {
        type: String,
        required: [true, 'Please add a next Renewal Date']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)