const { authMid, isAdmin } = require("../../middlewares/v2/auth");
const CONTROLLER_TALLER = require("../../controllers/v2/taller");

const RouterTaller = require("express").Router();

RouterTaller.route("/taller").get(CONTROLLER_TALLER.GET);

RouterTaller.route("/taller/:id").get(
  authMid,
  isAdmin,
  CONTROLLER_TALLER.GET_ONE
);

RouterTaller.route("/taller/:id/inscription/:idInscription").patch(
  authMid,
  isAdmin,
  CONTROLLER_TALLER.PATCH_INSCRIPTION
);

RouterTaller.route("/taller/:id/participant").post(
  authMid,
  CONTROLLER_TALLER.POST_PARTICIPANT
);

module.exports = RouterTaller;
