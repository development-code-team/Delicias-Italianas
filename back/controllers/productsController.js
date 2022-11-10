//Importar modelo
const producto = require("../models/product")

//Impor manejo de errores
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//Ejemplos para pruebas de Ventas

exports.newProduct=catchAsyncErrors( async (req,res,next) => {
    const product = await producto.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })

})

//Ejemplos para pruebas de Ventas