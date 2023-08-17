const path = require("path");
const fs = require("fs");
const sequelize = require("../config/database");
const { 
  getEmailByUserId,
} = require("../services/user.service");
const registrationService = require("../services/registration.service");
const reservationService = require("../services/reservation.service");
const userService = require("../services/user.service");
const { handleHttpError, handleErrorResponse } = require("../middlewares/handleError");
const ReservationDTO = require("../DTO/reservation.dto");
const sendMail = require("../utils/sendMail");
const { confirmedRegistration, deniedRegistration } = require("../utils/body.email");
const { createRecordAudit } = require("../services/audit.log.service");
const { getDateTime } = require("../utils/getdate.utils");
const {sendQRToEmail}=require("../utils/qr.utils");
const PATH_FILES_PRIVATE = path.join(__dirname, "../../uploads/private");

const getRegistrations = async(req, res) => {
  try {
      const registrations = await registrationService.getRegistrations(req.query);
      res.json(registrations);
  } catch (error) {
      handleHttpError(res, error);
  }
}

const getImagesOfTheReserve = async (req, res) => {
  const { folder, idReserve } = req.params;
  const reserveFound = await registrationService.getFilesOfReserve(
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

    const registrationFound = await registrationService.updateReservation(
      idReserve,
      reservationObject,
      transaction
    );
    const userFound = await getEmailByUserId(registrationFound.user_id);
    
    switch (status) {
      case "2":
        await sendMail(
          userFound.email_user,
          confirmedRegistration.subject,
          confirmedRegistration.content
          );
        break;
      case "3":
        await sendMail(
          userFound.email_user,
          deniedRegistration.subject,
          deniedRegistration.content);
        break;
      default:
        break;
    }
    const recordAuditObject={
      table_name:"reservation",
      action_type:"update",
      action_date:getDateTime(),
      user_id:req.iduser,
      record_id: idReserve,
      new_data: JSON.stringify({status})
    };

    await createRecordAudit(recordAuditObject,transaction);
    await transaction.commit();
    res.sendStatus(204);
  } catch (error) {
    await transaction.rollback();
    if (typeof error.code==='number') {
      handleErrorResponse(res, error.message, error.code);
      return;
    }
    handleHttpError(res, error);
  }
};

const updateRegistrationObserved = async (req, res) => {
  let filesToDelete = [];
  const transaction = await sequelize.transaction();
  try {
    const { idReserve } = req.params;
    const { name, lastname, email, dni, phone } = req.body;
    const { files, attendeeuniversity } = req;
    console.log("filesfilesfiles")
    console.log(files)
    console.log("attendeeuniversityattendeeuniversityattendeeuniversity")
    console.log(attendeeuniversity)

    const userObject = {};
    if (name !== undefined) userObject.name_user = name;
    if (lastname !== undefined) userObject.lastname_user = lastname;
    if (email !== undefined) userObject.email_user = email;
    if (dni !== undefined) userObject.dni_user = dni;
    if (phone !== undefined) userObject.phone_user = phone;

    const userFound = await userService.searchUserByReservation(idReserve);
    console.log("userFounduserFounduserFound")
    console.log(userFound)
    
    const userUpdated = await userService.updateUser(userFound.id_user, userObject, transaction);
    console.log("userUpdateduserUpdateduserUpdated")
    console.log(userUpdated)

    const reservationObject = {};
    reservationObject.dir_voucher = (filevoucher = "temp");

    const { objectDir } = await reservationService.updateReservationEvent(idReserve, reservationObject, files, attendeeuniversity, transaction);
    console.log("objectDirobjectDirobjectDir")
    console.log(objectDir)

    const recordAuditObject = {
      table_name: "reservation",
      action_type: "update",
      action_date: getDateTime(),
      user_id: req.iduser,
      record_id: req.iduser,
      new_data: JSON.stringify( reservationObject )
    };

    await createRecordAudit(recordAuditObject, transaction);

    filesToDelete = objectDir;

    await transaction.commit();
    res.sendStatus(204);
  } catch (err) {
    await transaction.rollback();
    return handleErrorResponse(res, err);
  }
};

const sendQRToUser=async(req,res)=>{

    const {users}=req.body;
    console.log(users)
    try {
        await sendQRToEmail(users);
        res.send('QR Enviados');
    } catch (error) {
        handleHttpError(error);
    }

}
module.exports = {
  getRegistrations,
  getImagesOfTheReserve,
  updateEnrollmentStatus,
  updateRegistrationObserved,
  sendQRToUser
};