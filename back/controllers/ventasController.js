//Import de modelo
const ventas = require("../models/ventas");
const producto = require("../models/product") //Modelo de productos

//Import Manejo de errores
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//Crear una venta
exports.newVenta=catchAsyncErrors(async (req,res,next)=>{
    const {items} = req.body;

    let precio = 0;
    let cantidad = 0;
    
    items.forEach(element => {
        precio += element.precio;
        cantidad += element.cantidad;

        
    });;

    const  total = precio*cantidad;

    //Creacion de venta en la BD
    const venta = await ventas.create({
        items,
        total
        
    })

    res.status(201).json({
    success:true,
    venta
        
    })
})
