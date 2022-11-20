    const express = require("express");
    const app = express();
    const errorMiddleware = require("./middleware/errors")
    const cookieParser = require("cookie-parser")
    const fileUpload = require('express-fileupload')
    

    //Uso de constantes importadas
    app.use(express.json());
    app.use(cookieParser());
    app.use(fileUpload());

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