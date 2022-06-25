const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    hotel_title: String,
    hotel_description: String,
    items: String
})

module.exports = mongoose.model('hotelsschema', HotelSchema)