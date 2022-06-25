const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const hotelRoute = require('./routes/hotels.routes')

//configuration
const PORT = process.env.PORT || 4000
const app = express()

//middleware
app.use(express.json())
app.use(cors())

// database connections
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is connected')
})

//routes
app.use('/hotels', hotelRoute)

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})