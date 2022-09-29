const express = require('express')
const router = express.Router()

const Carrito = require('../controllers/carrito')
const carrito = new Carrito()

router.post('/', (req, res) => {
    carrito.save(req.body).then(result => res.send(result))
})


module.exports = router