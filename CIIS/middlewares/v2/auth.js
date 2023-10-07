const jwt = require("jsonwebtoken");
const http = require("../../utils/http.msg");

const authMid = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send(http["401"]);

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;
    next(); // Aquí solo llamamos a next sin argumentos
  } catch (error) {
    return res.status(401).send(http["401"]);
  }
};

module.exports = authMid;
