//Modelo de ejemplo para hacer la pruebas de Ventas

const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
      type:String,
      required:[true,"Por favor registre una descripcion para el producto."]
    },
    
    imagen:{
        
        type:String,
        required:false
        
    },
    
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    //Relación de Usuario Producto
    /*user:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },*/

    fechaCreacion:{
        type:Date,
        default:Date.now
    },

    idproducto: {
        type:String
    }


})

module.exports=mongoose.model("productos",productosSchema)