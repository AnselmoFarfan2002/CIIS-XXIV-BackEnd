const { Router } = require("express");
const Users = require("../../models/Users");
const http = require("../../utils/http.msg");
const { compare } = require("../../utils/password.utils");
const jwt = require("jsonwebtoken");
const Inscriptions = require("../../models/Inscriptions");
const routerSession = Router();

routerSession
  .route("/session")
  .post((req, res) => {
    const { email, password } = req.body;
    let user = null;

    Users.findOne({ where: { email_user: email } })
      .then(async (data) => {
        if (!data)
          return Promise.reject({
            error: "Usuario no registrado",
            reason: "Intente registrarse primero",
            code: 404,
          });

        const { password_user } = data.dataValues;
        const auth = await compare(password, password_user);
        if (auth) {
          user = data.dataValues;
          return Promise.resolve(data.dataValues);
        } else
          return Promise.reject({
            error: "Credenciales incorrectas",
            reason: "Revise su email o contraseña",
            code: 401,
          });
      })
      .then((user) =>
        Inscriptions.findOne({
          where: { id_user: user.id_user, activity: "ciis" },
        })
      )
      .then((inscription) => {
        let now = new Date();
        now.setHours(now.getHours() + 2);

        user = {
          id: user.id_user,
          dni: user.dni_user,
          role: user.role_id,
          email: user.email_user,
          name: user.name_user,
          lastname: user.lastname_user,
          inscriptions: {
            ciis: inscription ? inscription.dataValues : false,
          },
          tiempoExpiracion: now,
        };

        const token = jwt.sign(user, process.env.JWT_PRIVATE_KEY, {
          expiresIn: "2h",
        });

        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 2 * 60 * 60 * 1000, // 2 horas en segundos
          path: "/", // Ruta de la cookie
        });

        res.status(201).send(user);
      })
      .catch((fail) => {
        return fail.code
          ? res.status(fail.code).send(fail)
          : res.status(500).send(http["500"]);
      });
  })
  .delete((req, res) => {
    res.cookie("miCookie", "", { expires: new Date(0) });
    res.redirect("/");
  });

module.exports = routerSession;