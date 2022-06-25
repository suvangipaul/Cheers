const mongoose = require('mongoose')
const ItemSchema = new mongoose.Schema({
    item_name: String,
    item_price: Number,
    item_description: String
})

const HotelSchema = new mongoose.Schema({
    hotel_title: String,
    hotel_description: String,
    items: [ItemSchema]
})

module.exports = mongoose.model('hotelsschema', HotelSchema)