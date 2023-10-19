const path = require("path");
const Taller = require("../../classes/Taller");
const authMid = require("../../middlewares/v2/auth");
const TallerSQL = require("../../models/Taller/Taller");

const http = require("../../utils/http.msg");
const { sendMailAtDomain } = require("../../utils/send.mail.utils");
const { emailRegistroTaller } = require("../../utils/emails/registro");

const RouterTaller = require("express").Router();

RouterTaller.route("/taller").get(async (req, res) => {
  try {
    let talleres = await TallerSQL.findAll({ where: { relatedEvent: 24 } });
    talleres = talleres.map((tll) => new Taller(tll));
    await Promise.all(talleres.map((tll) => tll.loadSpeaker()));
    res.send(talleres);
  } catch (err) {
    console.log(err);
    res.status(500).send(http["500"]);
  }
});

RouterTaller.route("/taller/:id/participant").post(
  authMid,
  async (req, res) => {
    try {
      if (!req.files?.payment_doc) return res.status(400).send(http["400"]);

      let taller = new Taller();
      await taller.load(req.params.id);

      if (await taller.checkParticipant(req.user.id))
        return res.status(409).send(http["409"]);

      await taller.addParticipant(req.user);
      await req.files.payment_doc.mv(
        path2save(`${req.user.dni}-taller-${req.params.id}.jpg`)
      );

      res.send(taller);

      await sendMailAtDomain(
        req.user.email,
        `Registro a taller ${taller.name} | CIIS`,
        emailRegistroTaller(req.user, taller)
      );
    } catch (err) {
      console.log(err);
      res.status(500).send(http["500"]);
    }
  }
);

function path2save(fileName) {
  return path.join(
    __dirname,
    "..",
    "..",
    "..",
    "uploads",
    "private",
    "inscription",
    "taller",
    fileName
  );
}

module.exports = RouterTaller;
