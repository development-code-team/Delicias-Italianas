const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

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
    const { email , password } = req.body;

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

//Olvide mi contraseña, recuperar contraseña
exports.forgotPassword = catchAsyncErrors(async (req, res, next)=>{
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken = user.genResetPasswordToken();

    await user.save({validateBeforeSave: false})

    //Crear una url para hacer el reset de la contraseña
    const resetUrl = `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`

    const mensaje = `Hola!\n\nTu link para ajustar una nueva contraseña es el 
    siguiente: \n\n${resetUrl}\n\n
    Si no solicitaste este link, por favor comunicate con soporte.\n\n Att:\nRestaurante Delicias Italianas`
    
    try{
        await sendEmail({
            email: user.email,
            subject: "Delicias Italianas - Recuperación de la contraseña",
            mensaje
        })
        res.status(200).json({
            success:true,
            message:`Correo enviado a: ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message, 500))
    }
})

//Resetear la contraseña

exports.resetPassword = catchAsyncErrors(async (req, res, next) =>{
    //Hash el token que llego con la URL
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscamos el usuario al que le vamos a resetear la contraseña
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt: Date.now()}
    })
    //El usuario si esta registrado en la BD
    if(!user){
        return next(new ErrorHandler("El token es invalido o ya expiro", 400))
    }
    //Diligenciamos bien los campos?
    if(req.body.password!==req.body.confirmPassword){
        return next (new ErrorHandler("Contraseñas no coinciden, 400"))
    }

    //Setear la nueva contraseña
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    tokenEnviado(user, 200, res)
})

//Ver perfil de usuario
exports.getUserProfile = catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})

//Update Contraseña (usuario logueado)
exports.updatePassword = catchAsyncErrors(async(req, res ,next)=>{
    const user = await User.findById(req.user.id).select("+password");

    //Revisamos si la contraseña vieja es igual a la nueva
    const sonIguales = await user.compararPass(req.body.oldPassword)

    if(!sonIguales){
        return next(new ErrorHandler("La contraseña actual no es correcta", 401))
    }
    

    user.password = req.body.newPassword;
    await user.save();

    tokenEnviado(user, 200, res)
})

//Update perfil de usuario (logueado)
exports.updateProfile = catchAsyncErrors(async(req, res, next)=>{
    const newUserData = {
        nombre: req.body.nombre/*,
        email: req.body.email*/
    }

    //Update del Avatar

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })

})

//Servicios controladores sobre usuarios por parte de los Administradores

//Ver todos los usuarios
exports.getAllUsers = catchAsyncErrors(async(req, res ,next)=>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

//Ver el detalle de 1 usuario
exports.getUserDetails = catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next (new ErrorHandler(`No se ha encontrado ningun usuario con el id: ${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        user
    })
})

//Actualizar perfil de usuario (como Administrador)
exports.updateUser = catchAsyncErrors(async(req, res, next)=>{
    const nuevaData = {
        nombre: req.body.nombre,
        email: req.body.email,
        role: req.body.role
    }

    const user= await User.findByIdAndUpdate(req.params.id, nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        user
    })
})

//Eliminar usuario (admin)
exports.deleteUser = catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findById(req.params.id);

    if(!user){
        return next (new ErrorHandler(`Usuario con id: ${req.params.id} no se encuentra en nuestra base de datos`))
    }
     await user.remove();

    res.status(200).json({
        success:true,
        message:"Usuario eliminado correctamente"
    })
})
