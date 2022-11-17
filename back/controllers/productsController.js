//Importar modelo
const producto = require("../models/product")

//Import manejo de errores
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//Crear nuevo producto
exports.newProduct=catchAsyncErrors( async (req,res,next) => {
    const product = await producto.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })

})

// Metodo get all productos
exports.getAll=catchAsyncErrors( async (req,res,next) => {
    const products = await producto.find();
    console.log(products);
    res.json(products);
})

// Metodo get productos Id
exports.getProductoId=catchAsyncErrors( async (req,res,next) => {
    const product = await producto.findById(req.params.id)
    res.json(product);

})

// Metodo put para actualizar un producto
exports.updateProducto=catchAsyncErrors( async (req,res,next) => {
    const { nombre, precio, descripcion, imagen, inventario } = req.body;
    const newProduct = {nombre, precio, descripcion, imagen, inventario};
    // Se actualiza con el newTask que es el nuevo objeto creado
    await producto.findByIdAndUpdate(req.params.id, newProduct)
    res.json({status: 'Producto actualizado exitosamente'})
})

// Metodo delete para eliminar un producto
exports.deleteProducto=catchAsyncErrors( async (req,res,next) => {
    await producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado exitosamente'})
})