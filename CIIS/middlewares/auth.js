const { getInfoRoleUserByCode } = require("../services/user.service");
const { verifyToken } = require("../utils/jwt.utils");
const { secret_key } = require("../config/development");
const { handleErrorResponse, handleHttpError } = require("./handleError");

const checkAuth = async (req, res, next) => {
  try {
    const { jwt = "" } = req.cookies;
    if (!jwt) {
      res.clearCookie("jwt");
      return handleErrorResponse(
        res,
        "Debe Iniciar Sesión. ¡Ingrese de nuevo!",
        404
      );
    }
    const { payload } = await verifyToken(jwt, secret_key.jwt_key);
    const userInfoFound = await getInfoRoleUserByCode(payload.code);
    req.iduser = userInfoFound.id_user;
    req.role = userInfoFound.role.name_role;
    next();
  } catch (error) {
    res.clearCookie("jwt");

    if (typeof error.code==='number') {
      return handleErrorResponse(res, error.message, error.code);
    }
    return handleErrorResponse(
      res,
      "Token inválido",
      401
    );
  }
};

const checkRole = (roles) => async (req, res, next) => {
  try {
    const { role = "" } = req;

    if (!roles.includes(role)) {
      handleErrorResponse(res, `No tiene los permisos necesarios.`, 403);
      return;
    }
    next();
  } catch (error) {
    handleHttpError(res, error);
  }
};

module.exports = {
  checkAuth,
  checkRole,
};
