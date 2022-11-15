const express = require("express")
const router = express.Router();
const {newProduct} = require("../controllers/productsController")
const Product = require('../models/product')

// Metodo post productos
router.route('/newproduct').post(newProduct)

// Metodo get all productos
router.route('/getall').get(async (req, res)=>{
    const products = await Product.find();
    console.log(products);
    res.json(products);    
});

// Metodo get productos
router.get('/getproducto/:id', async(req, res)=>{
    const product = await Product.findById(req.params.id)
    res.json(product);
})

// Metodo put para cambiar un producto
router.put('/updateproducto/:id', async (req, res) =>{
    const { nombre, precio, descripcion, imagen, inventario } = req.body;
    const newProduct = {nombre, precio, descripcion, imagen, inventario};
    // Se actualiza con el newTask que es el nuevo objeto creado
    await Product.findByIdAndUpdate(req.params.id, newProduct)
    res.json({status: 'Producto actualizado exitosamente'})
})

// Metodo delete para eliminar un producto
router.delete('/deleteproducto/:id', async (req, res) =>{
    await Product.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado exitosamente'})
});



module.exports = router;