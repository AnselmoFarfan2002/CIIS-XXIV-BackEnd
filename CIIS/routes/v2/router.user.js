const { Router } = require("express");
const Users = require("../../models/Users");
const http = require("../../utils/http.msg");
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const crypto = require("crypto");
const { encrypt } = require("../../utils/password.utils");
const routerUser = Router();

routerUser.route("/user").post((req, res) => {
  const { dni, email, password, name, lastname } = req.body;

  Users.findAll({ where: { dni_user: dni } })
    .then((data) => {
      if (Array.isArray(data)) {
        if (data.length > 0) return Promise.reject(http["409"]);
        else return Promise.resolve();
      } else return Promise.reject(http["500"]);
    })
    .then(() => Users.findAll({ where: { email_user: email } }))
    .then((data) => {
      if (Array.isArray(data)) {
        if (data.length > 0) return Promise.reject(http["409"]);
        else return Promise.resolve();
      } else return Promise.reject(http["500"]);
    })
    .then(async () =>
      Users.create({
        email_user: email,
        name_user: name,
        lastname_user: lastname,
        dni_user: dni,
        role_id: 2,
        password_user: await encrypt(password),
      })
    )
    .then((newUser) => {
      console.log(newUser);
      res.status(201).send(newUser);
    })
    .catch((fail = null) => {
      fail.code
        ? res.status(fail.code).send(fail)
        : res.status(500).send(http["500"]);
    });
});

module.exports = routerUser;
