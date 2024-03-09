const express = require('express')
const router = express.Router()
const {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getProducts).post(protect, setProduct)
router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct)
 
// router.get('/', getProducts)
// router.post('/', setProduct)
// router.put('/:id', updateProduct)
// router.delete('/:id', deleteProduct)

module.exports = router