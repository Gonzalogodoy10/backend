const express = require('express')
const app = express()
const PORT = 8080



app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


let productosDb = []

app.set('views' , './views')
app.set ('view engine' , 'ejs')

app.post('/' , (req, res) => {
    const { nombreProducto, precioProducto } = req.body;
    productosDb.push({productname: nombreProducto, price: precioProducto})
})

app.get('/productos' , (req,res) => {
    res.render('home' , {
            productos: productosDb
    })
})


app.listen(PORT , () => console.log(`Server on ${PORT}`))