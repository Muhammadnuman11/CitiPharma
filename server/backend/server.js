const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Enable CORS to get hit or request from other servers
app.use(cors());
// required to parse the html body in response
app.use(bodyParser.json());

app.use('/api/blogs', require('./routes/blogRoutes'))
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))