const sequelize = require("../../config/database");
const {
  handleErrorResponseV2,
  handleHttpErrorV2,
} = require("../../middlewares/handleError");

const {
  createOneConferenceAttendance,
  searchRegisterByEventAndUser,
  searchOneConference,
  searchOneConferenceByDateTimeAvailability,
  checkEventRegistrationAvailability,
  checkAllowedAttendance,
  checkConferenceAvailabilityByDateTime,
  getConferenceByDayByUser
} = require("../../services/conference.attendance.service");

const { updateReservation } = require("../../services/registration.service");

const registerAttendanceByUser = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { conferenceId } = req.params;
    const { id:userId } = req.user;

    let regex=/^[0-9]+$/;
  
    if(!regex.test(conferenceId)){
      handleErrorResponseV2(res, 'El parametro de la conferencia debe ser numérico', 400);
      return;
    }


    const conferenceFound = await searchOneConference(conferenceId);
    
    const {
      event_id: eventId,
      start_date_conference: startDateTime,
      exp_date_conference: expDateTime,
    } = conferenceFound;

    const reservationFound = await searchRegisterByEventAndUser(
      eventId,
      userId
    );

    const {
      id_reservation: reservationId,
      allowedAttendance,
      enrollment_status,
    } = reservationFound;

    await checkEventRegistrationAvailability(enrollment_status);

    await checkAllowedAttendance(allowedAttendance);

    await checkConferenceAvailabilityByDateTime(startDateTime, expDateTime);

    await createOneConferenceAttendance(
      conferenceId,
      reservationId,
      transaction
    );

    await transaction.commit();
    res.send({
      message:"Asistencia tomada"
    })
  } catch (error) {
    await transaction.rollback();
    if (typeof error.code == "number") {
      console.log(error);
      handleErrorResponseV2(res, error.message, error.code);
      return;
    }
    handleHttpErrorV2(res, error);
  }
};

const registerAttendanceConferenceCurrent = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { entry = 1 } = req.body;
    const { idEvent:eventId } = req.params;
    const { idUser:userId } = req;


    let regex=/^[0-1]+$/;
  
    if(!regex.test(entry)){
      handleErrorResponseV2(res, 'El parametro entrada solo puede ser 0 y 1', 400);
      return;
    }

    const reservationFound = await searchRegisterByEventAndUser(
      eventId,
      userId
    );

    const { id_reservation: reservationId, enrollment_status } =
      reservationFound;

    if (entry) {
      const conferenceFound = await searchOneConferenceByDateTimeAvailability(
        eventId
      );

      const {
        id_conference: conferenceId,
        start_date_conference: startDateTime,
        exp_date_conference: expDateTime,
      } = conferenceFound;

      await checkEventRegistrationAvailability(enrollment_status);

      await checkConferenceAvailabilityByDateTime(startDateTime, expDateTime);

      await createOneConferenceAttendance(
        conferenceId,
        reservationId,
        transaction
      );
    }

    await updateReservation(
      reservationId,
      {
        allowedAttendance: entry,
      },
      transaction
    );

    await transaction.commit();

    res.send({
      message: "Asistencia Tomada",
    });
  } catch (error) {
    await transaction.rollback();
    if (typeof error.code == "number") {
      console.log(error);
      handleErrorResponseV2(res, error.message, error.code);
      return;
    }
    handleHttpErrorV2(res, error);
  }
};

const getConferenceDayUser = async (req, res) => {
  try {
      const { day } = req.query;
      const { id:userId } = req.user;
      const conferences = await getConferenceByDayByUser(day,userId);
      res.json(conferences);
  } catch (error) {
      if (typeof error.code === "number") {
          handleErrorResponseV2(res, error.message, error.code);
          return;
      }
      handleHttpErrorV2(res, error);
  }
}
module.exports = {
  registerAttendanceByUser,
  registerAttendanceConferenceCurrent,
  getConferenceDayUser
};
