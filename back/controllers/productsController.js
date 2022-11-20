//Importar modelo
const producto = require("../models/product")

//Import manejo de errores
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//Crear nuevo producto
exports.newProduct=catchAsyncErrors( async (req,res) => {
    const nuevoproducto = new producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen, 
        inventario: req.body.inventario,
    })
    nuevoproducto.save(function(err){
        if(!err){
            res.send('Producto agregado correctamente')
        }else{
            res.send(err)
        }
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
        producto.find({idproducto:req.body.idproducto}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })

})


// Metodo put para actualizar un producto
exports.updateProducto=catchAsyncErrors(async (req,res) => {
    // Se actualiza con el newTask que es el nuevo objeto creado
        producto.findOneAndUpdate({idproducto:req.body.idproducto}, {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        fecha: Date.now,
        inventario: req.body.inventario
    }, (err) => {
        if(!err){
            res.send('Producto actualizado correctamente')
        }else{
            res.send(err)
        }
    })  
})




// Metodo delete para eliminar un producto
exports.deleteProducto=catchAsyncErrors( async (req,res,next) => {
    await producto.findByIdAndRemove(req.params.id);
    res.send('Producto eliminado exitosamente')
})