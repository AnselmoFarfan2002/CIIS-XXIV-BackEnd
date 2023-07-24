const { Router } = require("express");
const registrationRouter = Router();
const {
  getRegistrations,
  getImagesOfTheReserve,
  updateEnrollmentStatus,
} = require("../../controllers/registration.controller");
const reservationViewImagesDTO = require("../../DTO/reservation.view.image.dto");
const { checkAuth, checkRole } = require("../../middlewares/auth");
const {
  reservationUpdateStatusDTO,
} = require("../../DTO/reservation.update.dto");

registrationRouter.patch(
  "/:idReserve/status",
  checkAuth,
  checkRole(["Administrador"]),
  reservationUpdateStatusDTO,
  updateEnrollmentStatus
);
registrationRouter.get(
  "/:idReserve/files/:folder",
  checkAuth,
  checkRole(["Administrador"]),
  reservationViewImagesDTO,
  getImagesOfTheReserve
);
registrationRouter.get(
  "/",
  checkAuth,
  checkRole(["Administrador"]),
  getRegistrations
);
module.exports = registrationRouter;
