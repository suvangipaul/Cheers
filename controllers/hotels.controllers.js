const HotelSchema = require('../models/hotels.models')

const getHotel = async(req, res) => {
    try {
        const hotel_data = await HotelSchema.find()
        res.send(hotel_data)
    } catch (error) {
        res.send(error)
    }
}

const deleteHotel = async(req, res) => {
    const hotel_id = req.params.id
    try {
        const hotel_data = await HotelSchema.findByIdAndDelete(hotel_id)
        res.send(hotel_data)
    } catch (error) {
        res.send(error)
    }
}

const getOneHotel = async(req, res) => {
    const hotel_id = req.params.id
    try {
        const hotel_data = await HotelSchema.findById(hotel_id)
        res.send(hotel_data)
    } catch (error) {
        res.send(error)
    }
}

const updateHotel = async(req, res) => {
    const hotel_id = req.params.id
    const hotel_body = req.body
    try {
        const hotel_data = await HotelSchema.findByIdAndUpdate(hotel_id, hotel_body)
        res.send(hotel_data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getHotel,
    deleteHotel,
    getOneHotel,
    updateHotel
}