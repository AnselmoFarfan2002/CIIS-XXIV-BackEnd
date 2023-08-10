const { Op,Sequelize } = require("sequelize");
const Reservation = require("../models/Reservation");
const ConferenceAttendance = require("../models/ConferenceAttendance");
const Speakers = require("../models/Speakers");
const Conferences = require("../models/Conferences");
const Events = require("../models/Events");

const searchRegisterByEventAndUser = async (event, user) => {
  return new Promise(async (resolve, reject) => {
    const registerFound = await Reservation.findOne({
      where: {
        user_id: user,
        event_id: event,
        active: true,
      },
      include: [
        {
          model: Events,
          attributes: ["start_date", "exp_date"],
          required: true,
          where: {
            active: true,
          },
        },
      ],
    });

    if (!registerFound) {
      reject({
        code: 404,
        message: "No se ha encontrado el registro",
      });
      return;
    }

    resolve(registerFound.toJSON());
  });
};

const searchConferencesByEventAndDate = async (event, currentDate) => {
  return new Promise(async (resolve, reject) => {
    const conferenceFound = await Conferences.findAll({
      attributes: ["id_conference"],
      where: {
        event_id: event,
        [Op.and]: [
          {
            start_date_conference: {
              [Op.gte]: currentDate,
            },
          },
          {
            exp_date_conference: {
              [Op.lte]: currentDate,
            },
          },
        ],
      },
    });

    if (!conferenceFound || !conferenceFound.length) {
      reject({
        code: 404,
        message: "No hay conferencias disponibles en el evento",
      });
      return;
    }

    resolve(JSON.stringify(conferenceFound));
  });
};

const searchConferencesByShiftAndEvent = async (shift = true, event,currentDateTime) => {
  return new Promise(async (resolve, reject) => {
    const currentDate=currentDateTime.slice(0,10);
    console.log({shift})
    const conferenceFound = await Conferences.findAll({
      attributes: ["id_conference"],
      where:Sequelize.and(
        Sequelize.where(
          Sequelize.fn('DATE_FORMAT', Sequelize.col('start_date_conference'), '%Y-%m-%d'),
          currentDate
        ),
        {
          event_id: event,
          is_morning: shift,
        }) 
    });

    if (!conferenceFound || !conferenceFound.length) {
      reject({
        code: 404,
        message: "No hay conferencias disponibles en el evento",
      });
      return;
    }

    resolve(conferenceFound);
  });
};

const createConferenceAttendance = async (
  conferences,
  reservation,
  transaction
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conferenceAttendances = conferences.map((conference) => {
        return {
          reservation_id: reservation,
          conference_id: conference.id_conference,
        };
      });
      await ConferenceAttendance.bulkCreate(conferenceAttendances, {
        transaction,
      });
      resolve();
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        reject({
          code: 409,
          message: "Ya se ha registrado asistencia anteriormente",
        });
      } else {
        reject(error);
      }
    }
  });
};

const verifyRegisterStatusAndDateExp = async(reservation,currentDateTime) => {
  return new Promise((resolve, reject) => {
    if (reservation.enrollment_status != 2) {
      reject({ code: 400, message: "El registro no fue confirmado" });
      return;
    }
    
    const {start_date="2023-08-11",exp_date="2023-08-11"}=reservation.event;
    const date=currentDateTime.slice(0,10);

    if(date>=start_date && date<=exp_date){
      resolve();
      return;
    }
    
    reject({
    code:400,
    message:"No hay evento disponible en esta fecha"
    })
    return;
  });
};

const getTimeOfDayToConferences=(currentDateTime,minHour='08',maxHour='13')=>{
  const hour=currentDateTime.slice(11,13);
  
  let isMorning=0;

  if(hour>=minHour && hour<=maxHour){
    isMorning=1;
  }

  return isMorning;
}

module.exports = {
  createConferenceAttendance,
  searchConferencesByEventAndDate,
  searchRegisterByEventAndUser,
  searchConferencesByShiftAndEvent,
  verifyRegisterStatusAndDateExp,
  getTimeOfDayToConferences
};
