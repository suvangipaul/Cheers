const express = require('express')
const router = express.Router()

const {
    getHotel,
    deleteHotel,
    getOneHotel,
    updateHotel
} = require('../controllers/hotels.controllers')

router.get('/all', getHotel)

router.get('/:id', getOneHotel)

router.delete('/:id', deleteHotel)

router.put('/:id', updateHotel)

module.exports = router