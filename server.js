const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const path = require('path')
const hotelRoute = require('./routes/hotels.routes')
// const userRoute = require('./routes/users.routes')

//configuration
const PORT = process.env.PORT || 4000
const app = express()

// routes
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', "index.html"))
})
app.get('/explore', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', "index.html"))
})
app.get('/bar', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', "index.html"))
})
app.get('/charity', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', "index.html"))
})


//middleware
app.use(express.json())
app.use(cors())

// database connections
mongoose.connect(process.env.MONGODB_DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is connected')
})

//routes
app.use('/hotels', hotelRoute)
// app.use('/api', userRoute)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})