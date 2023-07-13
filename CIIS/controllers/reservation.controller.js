const { nanoid } = require("nanoid");
const fs=require("fs");
const sequelize = require("../config/database");
const { createRegisterUser } = require("../services/user.service");
const reservationService = require("../services/reservation.service");
const UserDTO = require("../DTO/user.dto");
const { handleHttpError } = require("../middlewares/handleError");
const ReservationDTO = require("../DTO/reservation.dto");
const path = require("path");

const PATHVOUCHER=path.join(__dirname,'../../build/voucher');

const createPreRegisterUser = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, firstLastname, secondLastname, email, phone, numvoucher } =
      req.body;
    const userDTO = new UserDTO(
      name,
      firstLastname,
      secondLastname,
      email,
      phone
    );
    const code = nanoid(15);
    userDTO.code = code;
    userDTO.role = 2;
    const userCreated = await createRegisterUser(userDTO, transaction);

    const reservationObject = new ReservationDTO(numvoucher);

    reservationObject.filevoucher = req.file.filename;
    reservationObject.statusRegister = 1;
    reservationObject.isActive = 1;
    reservationObject.event = 12;
    reservationObject.user = userCreated.id_user;
    reservationObject.type_attendee=2;

    await reservationService.createReservationEvent(
      reservationObject,
      transaction
    );
    await transaction.commit();
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    await transaction.rollback();
    fs.unlink(path.join(PATHVOUCHER,req.file.filename), (err) => {
      if (err) {
        console.log("Error al eliminar el archivo");
      }
      handleHttpError(res, error);
    });
  }
};

module.exports = {
  createPreRegisterUser,
};
