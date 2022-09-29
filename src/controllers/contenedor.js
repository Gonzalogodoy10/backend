const fs = require('fs')
const pathToFile = './src/data/productos.json'

class Contenedor {
    
    getById = async (id) => {
        
        if (!id) return {status: "error", message: "Id required"}
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let producto = productos.find(producto => producto.id == id)
            console.log(producto)
            if (producto) return {status: "succes", message:{producto}}
            return {status: "error", message: "Producto sin stock"}
        }}


    getAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            return {status: "success", message: productos}
        } else {
            return {status: "error", message: 'No hay productos'}
        }
    }

    deleteById = async (id) => {
        
        if (!id) return {status: "error", message: "Id required"}
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(data)
            let productosnuevos = productos.filter(producto => producto.id != id)
            await fs.promises.writeFile(pathToFile, JSON.stringify(productosnuevos,null,2))
            return {status: "success", message: "producto eliminado"}
        } else {
            return {status: "error", message: err.message}
        }
    }

    update = async (id, product) => {
        
        let data = await fs.promises.readFile(pathToFile, 'utf-8')
        let productos = JSON.parse(data)
        let newProducts = productos.map(item => {
            if (item.id == id) {
                return {
                    id,
                    ...product
                }
            } else return item
        })
        await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts,null,2))
        return {status: "success", message: "producto modificado" , producto: newProducts}
    }

        save = async (producto) => {
        try {
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let productos = JSON.parse(data)
                let id = productos[productos.length-1].id+1
                producto.id = id
                productos.push(producto)
                await fs.promises.writeFile(pathToFile, JSON.stringify(productos, null, 2))
                return {status: "success", message: "Producto creado"}
            } else {
                producto.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([producto], null, 2))
                console.log (producto.id)
                return {status: "success", message: "Producto creado"}
            }
        } catch(err) {
            return {status: "error", message: err.message}
        }
    }

}

module.exports = Contenedor    

