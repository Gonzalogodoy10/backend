const express = require('express')
const router = express.Router()

const Manager = require('../controllers/contenedor')
const manager = new Manager()


router.get('/', (req, res) => {
    manager.getAll().then(result => res.send(result))
    // res.send('Hola desde productos')
})

router.get('/:id' , (req, res) => {
    manager.getById(req.params.id).then(result => res.send(result))
})

router.post('/', (req, res) => {
    manager.save(req.body).then(result => res.send(result))
})

router.put('/:id', (req, res) => {
    manager.update(req.params.id,req.body).then(result => res.send(result))
})

router.delete('/:id', (req, res) => {
    manager.deleteById(req.params.id).then(result => res.send(result))
})


module.exports = router