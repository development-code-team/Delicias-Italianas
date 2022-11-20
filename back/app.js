    const express = require("express");
    const app = express();
    const errorMiddleware = require("./middleware/errors")
    const cookieParser = require("cookie-parser")
    

    //Uso de constantes importadas
    app.use(express.json());
    app.use(cookieParser());

    //Import de Rutas
    const productos = require("./routes/products")    //Import de Rutas de producto
    const ventas = require("./routes/ventas")    //Import de Rutas de Ventas
    const usuarios = require("./routes/auth")


    const bodyParser = require('body-parser')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:'true'}))

    
    app.use('/api',productos)
    app.use('/api',ventas)
    app.use('/api',usuarios)


    //MiddleWare para manejar errores
    app.use(errorMiddleware)

    module.exports = app    