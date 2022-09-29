const express = require('express')


const productosRouter = require('./src/routes/productos')
const carritoRouter = require ('./src/routes/carrito')
// let products = require('./models/product.model')

const Manager = require('./src/controllers/contenedor')
const manager = new Manager()

const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Hola')
})

app.use('/productos', productosRouter)
app.use('/carrito', carritoRouter)

