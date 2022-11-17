const User = require ("../models/auth")
const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Verificar la autenticacion(existencia y veracidad del token)
exports.isAuthenticateUser = catchAsyncErrors(async (req, res, next)=>{
    const {token} = req.cookies

    if(!token){
        return next(new ErrorHandler("Debe iniciar sesión para acceder a este recurso", 401))
    }

    const decodificada = jwt.decode(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodificada.id);
    next()
})

//Capturar el rol del usuario que se conecta
exports.authorizeRoles = (...roles)=>{
    return(req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role (${req.user.role}) no esta autorizado a entrar a esta area, 403`))
        }
        next()
    }
}