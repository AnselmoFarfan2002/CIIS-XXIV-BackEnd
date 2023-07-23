const { authTokenById } = require("../services/session.service");
const { handleErrorResponse } = require("../middlewares/handleError");
const { verifyToken } = require("../utils/jwt.utils");

const verifySession = async (req, res, next) => {
  const { jwt } = req.cookies;
  
  if (!jwt) {
    return handleErrorResponse(res, "La sesión no ha sido iniciada", 401);
  } else {
    try {
      const { payload } = await verifyToken(jwt, process.env.JWT_PRIVATE_KEY);
      const result = await authTokenById(payload.code_user);
      if (result.iserror == 1) {
        return handleErrorResponse(res, "El código no ha sido encontrado", 400);
      } else { 
        req.id = result.user.id_user;
        req.name = result.user.name_user;
        req.email = result.user.email_user;
        req.role = result.user.role_id;

        next();
      }  
    } catch (err) {
      res.clearCookie('jwt');

      return handleErrorResponse(res, err);
    }
  }
}

module.exports = {
  verifySession
};
