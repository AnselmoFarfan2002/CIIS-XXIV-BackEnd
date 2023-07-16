const { nanoid } = require("nanoid");
const sequelize = require("../config/database");
const { createRegisterUser } = require("../services/user.service");
const reservationService = require("../services/reservation.service");
const UserDTO = require("../DTO/user.dto");
const { handleHttpError, handleErrorResponse } = require("../middlewares/handleError");
const ReservationDTO = require("../DTO/reservation.dto");
// const uploadImage = require("../utils/upload.img");


const createPreRegisterUser = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, firstLastname, secondLastname, email,dni, phone,career,studycenter, numvoucher,typeattendee } =
      req.body;
    const {files,attendeeuniversity=false}=req;
    const {event}=req.query;
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
      filevoucher='temp',
      statusRegister=1,
      user=userCreated.id_user,
      event,
      typeattendee,
      isActive=1,
    );

    await reservationService.createReservationEvent(
      reservationObject,
      files,
      attendeeuniversity,
      transaction
    );
    await transaction.commit();
    res.sendStatus(201);
  } catch (error) {
    await transaction.rollback();
    handleHttpError(res,error);
  }
};

module.exports = {
  createPreRegisterUser,
};
