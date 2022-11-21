    const express = require("express");
    const app = express();
    const errorMiddleware = require("./middleware/errors")
    const cookieParser = require("cookie-parser")
    const bodyParser = require('body-parser')
    const fileUpload = require('express-fileupload')
    const path = require("path")

    if(process.env.NODE_ENV!=="PRODUCTION") require('dotenv').config({path:'back/config/config.env'})

    //Uso de constantes importadas
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(fileUpload());

    //Import de Rutas
    const productos = require("./routes/products")    //Import de Rutas de producto
    const ventas = require("./routes/ventas")    //Import de Rutas de Ventas
    const usuarios = require("./routes/auth")


    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:'true'}))

    
    app.use('/api',productos)
    app.use('/api',ventas)
    app.use('/api',usuarios)

    if(process.env.NODE_ENV === "PRODUCTION"){
        app.use(express.static(path.join(__dirname,'../front/build')))
        app.get("*", (req, res)=>{
            res.sendFile(path.resolve(__dirname,'../front/build/index.html'))
        })
    }

    //MiddleWare para manejar errores
    app.use(errorMiddleware)

    module.exports = app    