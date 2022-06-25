const express = require('express')
const { PrismaClient } = require('@prisma/client')
const router = express.Router()
const prisma = new PrismaClient()

router.get('/users/get', async (req, res) => {
    const data = await prisma.user.findMany({})
    res.status(200).json(data)
})


// get users order and its order details
router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    const user = await prisma.user.findMany({
        where: {
            id,
        }
    })
    res.send(user)
})

// store user order and its details
router.post('/user/add',async (req, res) => {
    const userdata = req.body
    const order = await prisma.user.create({
        data: userdata
    })
    res.status(201).send(order)
})

// delete user and its details
router.delete('/user/:id', async (req, res) => {
    const id = req.params.id

    const user = await prisma.user.delete({
        where: {
            id: Number(id)
        },
    })
    res.send(user)
})

module.exports = router;

