const fs = require('fs')
const pathToFile = './src/data/carrito.json'


class Carrito {

    
        save = async (producto) => {
            try {
                if (fs.existsSync(pathToFile)) {
                    let data = await fs.promises.readFile(pathToFile, 'utf-8')
                    let productos = JSON.parse(data)
                    let id = productos[productos.length-1].cart_id+1
                    productos.push({cart_id : id , producto : producto})
                    // productos.push({cart_id: id  , productos: producto})
                    console.log(productos)
                    // await fs.promises.writeFile(pathToFile, JSON.stringify([{cart_id: id  , productos: producto}], null , 2))
                    // return {status: "success", message: "Producto creado"}
                } else {
                    let cart_id = 1
                    await fs.promises.writeFile(pathToFile, JSON.stringify([{cart_id: cart_id , producto: producto}], null, 2))
                    console.log (producto.id)
                    return {status: "success", message: "Producto creado"}
                }
            } catch(err) {
                return {status: "error", message: err.message}
            }
        }

}

module.exports = Carrito    

