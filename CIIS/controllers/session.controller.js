const { authByEmailPwd } = require("../services/session.service");
const { handleErrorResponse } = require("../middlewares/handleError");
const { signToken } = require("../utils/jwt.utils");
const { secret_key } = require("../config/development");
const startSession = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authByEmailPwd(email, password);

    if (result.iserror == 1) {
      return handleErrorResponse(res, "El email no ha sido encontrado", 400);
    } else if (result.iserror == 2) {
      return handleErrorResponse(res, "El password no es correcto", 400);
    } else {
      const { code_user } = result.user;
      const user = { code: code_user };

      const jwt = await signToken(user, "2h", secret_key.jwt_key);

      const cookieOptions = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true, // acepta http y https
      };

      res.cookie("jwt", jwt, cookieOptions);

      return res.send({
        id: result.user.id_user,
        name: result.user.name_user,
        email: result.user.email_user,
        role: result.user.role_id,
      });
    }
  } catch (err) {
    return handleErrorResponse(res, err);
  }
};

const endSession = async (req, res) => {

  const { jwt='' } = req.cookies;

  
  res.clearCookie("jwt");
  if (!jwt) {
    return handleErrorResponse(res, "Sesión Inválida", 404);
  }
  return res.send("Sesión eliminada correctamente");
};

module.exports = {
  startSession,
  endSession,
};
