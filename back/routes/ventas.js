
const express = require("express"); //Import de  express

const router = express.Router();

const { newVenta } = require("../controllers/ventasController") //Import de metodos desde el controller

//Ruta para crear una nueva venta
router.route("/ventas/new").post(newVenta);

module.exports = router;

