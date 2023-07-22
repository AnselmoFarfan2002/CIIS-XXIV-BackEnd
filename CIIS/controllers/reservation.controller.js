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
const {confirmedRegistration,deniedRegistration} = require("../utils/body.email");

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
    // await sendMail(email,"Verificación de correo",bodyEmail);

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

const getImagesOfTheReserve = async (req, res) => {
  const { folder, idReserve } = req.params;
  const reserveFound = await reservationService.getFilesOfReserve(
    folder.toUpperCase(),
    idReserve
  );

  if (!reserveFound) {
    handleErrorResponse(res, "El archivo no existe.", 404);
    return;
  }

  const imagePath = path.join(PATH_FILES_PRIVATE, reserveFound.dirimage);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      handleErrorResponse(res, "Error al leer la imagen.", 500);
      return;
    } else {
      res.setHeader("Content-Type", "image/jpeg");
      res.status(200).send(data);
    }
  });
};

const updateEnrollmentStatus = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { idReserve } = req.params;
    const { status } = req.body;

    const reservationObject = {
      enrollment_status: status,
    };

    const registrationFound = await reservationService.updateReservation(
      idReserve,
      reservationObject,
      transaction
    );
    const userFound = await getEmailByUserId(registrationFound.user_id);

    // switch (status) {
    //   case "2":
    //     await sendMail(
    //       userFound.email_user,
    //       confirmedRegistration.subject,
    //       confirmedRegistration.content
    //       );
    //     break;
    //   case "3":
    //     await sendMail(
    //       userFound.email_user,
    //       deniedRegistration.subject,
    //       deniedRegistration.content);
    //     break;
    //   default:
    //     break;
    // }

    await transaction.commit();
    res.status(204).send("Reserva Actualizada");
  } catch (error) {
    await transaction.rollback();
    if (error.code) {
      handleErrorResponse(res, error.message, error.code);
      return;
    }
    handleHttpError(res, error);
  }
};

module.exports = {
  createPreRegisterUser,
  getImagesOfTheReserve,
  updateEnrollmentStatus,
};
