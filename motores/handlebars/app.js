const express = require('express')
const app = express()
const PORT = 8080
const handlebars = require('express-handlebars')


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.engine('handlebars' , handlebars.engine())
app.set('views', './views')
app.set('view engine' , 'handlebars')


let productosDb = []

app.get ('/productos' , (req, res) => {
    let productos = productosDb
    res.render('home' , {
        productos : productos
    })
})

app.post('/' , (req, res) => {
    const { nombreProducto, precioProducto } = req.body;
    productosDb.push({productname: nombreProducto, price: precioProducto})
})












app.listen(PORT , () => console.log(`Server on ${PORT}`))