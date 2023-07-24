const { nanoid } = require("nanoid");
const path = require("path");
const fs = require("fs");
const sequelize = require("../config/database");
const {
  createRegisterUser,
  getEmailByUserId,
} = require("../services/user.service");
const reservationService = require("../services/reservation.service");
const UserDTO = require("../DTO/user.dto");
const {
  handleHttpError,
  handleErrorResponse,
} = require("../middlewares/handleError");
const ReservationDTO = require("../DTO/reservation.dto");
const sendMail = require("../utils/sendMail");
const bodyEmail = require("../config/bodyEmail");

const PATH_FILES_PRIVATE = path.join(__dirname, "../../uploads/private");

const createPreRegisterUser = async (req, res) => {
  let filesToDelete = [];
  const transaction = await sequelize.transaction();
  try {
    const {
      name,
      firstLastname,
      secondLastname,
      email,
      dni,
      phone,
      career,
      studycenter,
      numvoucher,
      typeattendee,
    } = req.body;
    const { files, attendeeuniversity = false } = req;
    const { event } = req.query;
    const userDTO = new UserDTO(
      name,
      firstLastname,
      secondLastname,
      email,
      dni,
      phone,
      career,
      studycenter
    );
    const code = nanoid(15);
    userDTO.code = code;
    userDTO.role = 2;
    const userCreated = await createRegisterUser(userDTO, transaction);

    const reservationObject = new ReservationDTO(
      numvoucher,
      (filevoucher = "temp"),
      (statusRegister = 1),
      (user = userCreated.id_user),
      event,
      typeattendee,
      (isActive = 1)
    );

    const { objectDir: pathsimage } =
      await reservationService.createReservationEvent(
        reservationObject,
        files,
        attendeeuniversity,
        transaction
      );
    filesToDelete = pathsimage;
    await sendMail(email,"Verificación de correo",bodyEmail);

    await transaction.commit();
    res.sendStatus(201);
  } catch (error) {
    await transaction.rollback();

    if (error.sendMailFailed) {
      filesToDelete.forEach((filePath) => {
        fs.unlinkSync(path.join(PATH_FILES_PRIVATE, filePath));
      });
    }
    if (error.code) {
      handleErrorResponse(res, error.message, error.code);
      return;
    }
    return handleHttpError(res, error);
  }
};


module.exports = {
  createPreRegisterUser,
};
