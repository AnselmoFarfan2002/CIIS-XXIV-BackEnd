const { Router } = require("express");
const Users = require("../../models/Users");
const http = require("../../utils/http.msg");
const { encrypt } = require("../../utils/password.utils");
const { sendMailAtDomain } = require("../../utils/send.mail.utils");
const { email_registro } = require("../../utils/emails/registro");
const { authMid } = require("../../middlewares/v2/auth");
const TallerInscriptionSQL = require("../../models/Taller/TallerInscription");
const Taller = require("../../classes/Taller");
const CONTROLLER_SESSION = require("../../controllers/v2/session");
const Reservation = require("../../models/Reservation");
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
    .then(async (newUser) => {
      sendMailAtDomain(email, "Registro exitoso", email_registro);
      CONTROLLER_SESSION.POST(req, res);
    })
    .catch((fail = null) => {
      fail.code
        ? res.status(fail.code).send(fail)
        : res.status(500).send(http["500"]);
    });
});

routerUser.route("/user/inscription").get(authMid, async (req, res) => {
  const { event } = req.query;
  try {
    let inscripciones = {
      talleres: [],
      ciis: null,
    };

    let talleres = await TallerInscriptionSQL.findAll({
      where: {
        relatedUser: req.user.id,
      },
    });

    inscripciones.talleres = await Promise.all(
      talleres.map(async (tll) => {
        let taller = new Taller();
        await taller.load(tll.relatedTaller);
        taller.state = tll.state;

        return Promise.resolve(taller);
      })
    );

    let ciis = (
      await Reservation.findOne({
        where: { user_id: req.user.id, event_id: event },
      })
    ).dataValues;
    inscripciones.ciis = ciis ? ciis.enrollment_status : 3;
    res.send(inscripciones);
  } catch (err) {
    console.log(err);
    res.status(500).send(http["500"]);
  }
});

module.exports = routerUser;
