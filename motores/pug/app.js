const express = require('express')
const app = express()
const PORT = 8080



app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


let productosDb = []

app.set('views' , './views')
app.set ('view engine' , 'pug')

app.post('/' , (req, res) => {

    const { nombreProducto, precioProducto } = req.body;
    productosDb.push({productname: nombreProducto, price: precioProducto})
})


app.get('/productos' , (req,res) => {
    let productos = productosDb
    res.render('home' , {
        productos : productos
    })
})









app.listen(PORT , () => console.log(`Server on ${PORT}`))
