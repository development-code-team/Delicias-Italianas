
const express = require("express"); //Import de  express

const router = express.Router();

const { newVenta } = require("../controllers/ventasController") //Import de metodos desde el controller
const Venta = require('../models/ventas')



//Ruta para crear una nueva venta, metodo post ventas 
router.route("/ventas/new").post(newVenta);


// Metodo get all ventas
router.route('/allventas').get(async (req, res)=>{
    const ventas = await Venta.find();
    console.log(ventas);
    res.json(ventas);    
});

// Metodo get 1 venta
router.get('/getventa/:id', async(req, res)=>{
    const venta = await Venta.findById(req.params.id)
    res.json(venta);
})

// Metodo put para cambiar una venta
router.put('/updateventa/:id', async (req, res) =>{
    const { items, producto, cantidad, precio } = req.body;
    const newVenta = {items, producto, cantidad, precio};
    // Se actualiza con el newTask que es el nuevo objeto creado
    await Venta.findByIdAndUpdate(req.params.id, newVenta)
    res.json({status: 'Venta actualizado exitosamente'})
})

// Metodo delete para eliminar una venta
router.delete('/deleteventa/:id', async (req, res) =>{
    await Venta.findByIdAndRemove(req.params.id);
    res.json({status: 'Venta eliminado exitosamente'})
});







module.exports = router;

