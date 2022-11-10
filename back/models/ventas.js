const mongoose = require("mongoose");

const ventasSchema=mongoose.Schema({

    items:[{
        producto:{
            type:mongoose.Schema.Types.ObjectId,
            require:true,
            ref:"productos"
        },
        cantidad: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }


    }],


    total:{
        type:Number,
        required: true
    },

    fechaVenta:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("ventas", ventasSchema);


