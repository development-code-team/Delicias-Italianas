const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario = catchAsyncErrors(async(req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id: "ANd9GcSYaWJibmdt2yjA7hZpUdpPpL0HneTxiVxtAg&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaWJibmdt2yjA7hZpUdpPpL0HneTxiVxtAg&usqp=CAU"
        }
    })
    tokenEnviado(user,201,res)
})

//Inicio de sesion - login
exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const { email, password } = req.body;

    //Revisar si los campos estan completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & contraseña", 400))
    }

    //Buscar al usuario en la BD
    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }

    //Comparar contraseñas, verificar si esta bien
    const contrasenaOk = await user.compararPass(password);

    if(!contrasenaOk){
        return next(new ErrorHandler("Contraseña invalida", 401))
    }

    tokenEnviado(user,200,res)
})

//Cerrar sesión logout
exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token", null,{ expires: new Date(Date.now()),
    httpOnly: true
    })

    res.status(200).json({
        success:true,
        message:"Cerro sesión"
    })
    
})