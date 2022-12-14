const express = require("express")
const router = express.Router();
const { newProduct,
        getAll,
        getProductoId,
        updateProducto,
        deleteProducto} 
        = require("../controllers/productsController");

const { isAuthenticateUser , authorizeRoles } = require("../middleware/auth");
const Product = require('../models/product')

// Metodo post productos
router.route('/newproduct').post(/*isAuthenticateUser, authorizeRoles("admin"),*/ newProduct)

// Metodo get all productos
router.route('/getall').get(getAll)

// Metodo get producto
router.route('/getproducto').post(getProductoId)

// Metodo put para cambiar un producto
router.route('/updateproducto').put(/*isAuthenticateUser, authorizeRoles("admin"),*/ updateProducto)

// Metodo delete para eliminar un producto
router.route('/deleteproducto/:id').delete(/*isAuthenticateUser, authorizeRoles("admin"),*/ deleteProducto)

module.exports = router;