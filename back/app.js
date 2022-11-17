    const express = require("express");
    const app = express();
    app.use(express.json())

    //Import de Rutas de producto
    const productos = require("./routes/products")    //Import de Rutas de producto
    const ventas = require("./routes/ventas")    //Import de Rutas de Ventas
    const usuarios = require("./routes/auth")

    
    app.use('/api',productos)
    app.use('/api',ventas)
    app.use('/api',usuarios)

    module.exports = app    