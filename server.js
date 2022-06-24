const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

//configuration
const PORT = process.env.PORT || 4000
const app = express()

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})