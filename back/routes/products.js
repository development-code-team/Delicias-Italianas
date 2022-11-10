const express = require("express")
const router = express.Router();
const {newProduct} = require("../controllers/productsController")



router.route('/newproduct').post(newProduct)


module.exports = router;