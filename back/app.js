    const express = require("express");
    const app = express();
    app.use(express.json())

    //Import de Rutas de producto
    const productos = require("./routes/products")    //Import de Rutas de producto
    const ventas = require("./routes/ventas")    //Import de Rutas de Ventas


    
    app.use('/api',productos)
    app.use('/api',ventas)

    module.exports = app    