const { Router } = require("express");
const http = require("../../utils/http.msg");
const fileUpload = require("express-fileupload");
const routerInscription = Router();

const path = require("path");
const Inscriptions = require("../../models/Inscriptions");
const ScholarCodes = require("../../models/ScholarCodes");

const registers = {
  op1: (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Ningún archivo fue subido.");
    }
    req.files.payment_doc.mv(
      path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`),
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          Inscriptions.create({
            id_user: req.user.id,
            activity: "ciis",
            price: 120,
            checked: false,
            status: 0,
            delegacion: null,
          })
            .then((data) => res.status(201).send(data.dataValues))
            .catch((err) => {
              console.log(err);
              res.status(500).send(http["500"]);
            });
        }
      }
    );
  },
  op2: (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Ningún archivo fue subido.");
    }

    if (req.files.payment_doc && req.files.scholar_doc) {
      req.files.payment_doc
        .mv(path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`))
        .then(() =>
          req.files.scholar_doc.mv(
            path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`)
          )
        )
        .then(() => {
          Inscriptions.create({
            id_user: req.user.id,
            activity: "ciis",
            price: 80,
            checked: false,
            status: 0,
            delegacion: null,
          })
            .then((data) => res.status(201).send(data.dataValues))
            .catch((err) => {
              console.log(err);
              res.status(500).send(http["500"]);
            });
        });
    }
  },
  op3: (req, res) => {
    ScholarCodes.findOne({ where: { code: req.body.scholar_code } })
      .then((match) => {
        if (!match)
          return Promise.reject({
            error: "Código no existente",
            reason: "No hemos registrado este código de delegación",
            code: 500,
          });
        else return Promise.resolve();
      })
      .then(() => {
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send("Ningún archivo fue subido.");
        }

        if (req.files.payment_doc && req.files.scholar_doc) {
          req.files.payment_doc
            .mv(path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`))
            .then(() =>
              req.files.scholar_doc.mv(
                path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`)
              )
            )
            .then(() => {
              Inscriptions.create({
                id_user: req.user.id,
                activity: "ciis",
                price: 65,
                checked: false,
                status: 0,
                delegacion: req.body.scholar_code,
              })
                .then((data) => res.status(201).send(data.dataValues))
                .catch((err) => {
                  console.log(err);
                  res.status(500).send(http["500"]);
                });
            });
        }
      })
      .catch((fail = null) => {
        fail.code
          ? res.status(fail.code).send(fail)
          : res.status(500).send(http["500"]);
      });
  },
  op4: (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Ningún archivo fue subido.");
    }

    if (req.files.payment_doc && req.files.scholar_doc) {
      req.files.payment_doc
        .mv(path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`))
        .then(() =>
          req.files.scholar_doc.mv(
            path.join(GetCiisFolder(), `${req.user.dni}-ciis-scholar.png`)
          )
        )
        .then(() => {
          Inscriptions.create({
            id_user: req.user.id,
            activity: "ciis",
            price: 50,
            checked: false,
            status: 0,
            delegacion: null,
          })
            .then((data) => res.status(201).send(data.dataValues))
            .catch((err) => {
              console.log(err);
              res.status(500).send(http["500"]);
            });
        });
    }
  },
};

routerInscription.route("/inscription/ciis").post((req, res) => {
  const { type } = req.query;

  Inscriptions.findOne({
    where: { id_user: req.user.id, activity: "ciis" },
  })
    .then((already) => {
      if (already) {
        return Promise.reject({
          error: "Error",
          reason: "Usted ya ha sido registrado",
          code: 409,
        });
      } else if (!registers[type]) return Promise.reject(http["500"]);
      else registers[type](req, res);
    })
    .catch((fail = null) => {
      fail.code
        ? res.status(fail.code).send(fail)
        : res.status(500).send(http["500"]);
    });
});

function GetCiisFolder() {
  return path.join(
    __dirname,
    "..",
    "..",
    "..",
    "uploads",
    "private",
    "inscription",
    "ciis"
  );
}

module.exports = routerInscription;
