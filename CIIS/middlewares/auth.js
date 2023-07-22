const {getInfoRoleUserByCode} = require("../services/user.service");
const { verifyToken } = require("../utils/jwt.utils");
const {secret_key}=require("../config/development");
const {handleErrorResponse, handleHttpError}=require("./handleError");


const checkAuth=async(req,res,next)=>{
    const { jwt=''} = req.cookies;
    try {
        if(!jwt) return handleErrorResponse(res,"Debe Iniciar Sesión. ¡Ingrese de nuevo!",401);

        const {payload}=await  verifyToken(jwt,secret_key.jwt_key);
        const userInfoFound=await getInfoRoleUserByCode(payload.code);
        req.iduser=userInfoFound.id_user;
        req.role=userInfoFound.name_role;

        next();
    } catch (error) {
        res.clearCookie('jwt');
        handleErrorResponse(res,"Error en la autenticación del usuario.",401);
    }
}

const checkRole=(...roles)=>async(req,res,next)=>{
    try {
        const {role=''}=req;
        if(!roles.includes(role)){
            handleErrorResponse(res,`No tiene los permisos necesarios.`,403);
            return;
        }
        next();
    } catch (error) {
        handleHttpError(res,error);
    }
}

module.exports={
    checkAuth,
    checkRole
}