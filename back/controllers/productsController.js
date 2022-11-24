//Importar modelo
const producto = require("../models/product")
const cloudinary=require("cloudinary")

//Import manejo de errores
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");


// Metodo get all productos
exports.getAll=catchAsyncErrors( async (req,res,next) => {
    const products = await producto.find();
    console.log(products);
    res.json(products);
})

// Metodo get productos Id
exports.getProductoId=catchAsyncErrors( async (req,res,next) => {
        producto.find({id:req.body._id}, function(docs, err){
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

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    let imagen=[]
    if(typeof req.body.imagen==="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }

    let imagenLink=[]

    for (let i=0; i<imagen.length;i++){
        const result = await cloudinary.v2.uploader.upload(imagen[i],{
            folder:"products"
        })
        imagenLink.push({
            public_id:result.public_id,
            url: result.secure_url
        })
    }

    req.body.imagen=imagenLink
    // req.body.user = req.user.id;
    const product = await producto.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})