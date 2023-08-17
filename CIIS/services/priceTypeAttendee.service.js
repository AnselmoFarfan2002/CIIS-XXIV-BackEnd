const PriceTypeAttendee = require("../models/PriceTypeAttendee");
const TypeAttendee = require("../models/TypeAttendee");
const Reservation = require("../models/Reservation");
const { getDate } = require("../utils/getdate.utils");
const { Op } = require("sequelize");
const {getDateTimeLocalPeru}=require("../utils/getdate.utils");

const searchTypeAttendeByEvent = async (type, event) => {
  const currentDate=getDate();
  const oneTypeAttendee = await PriceTypeAttendee.findOne({
    where: {
      type_attendee_id: type,
      event_id: event,
      [Op.and]: [
        { start_date_price: { [Op.lte]: currentDate } },
        {
          exp_date_price: {
            [Op.or]: {
              [Op.is]: null,
              [Op.gte]: currentDate,
            },
          },
        },
      ],
    },
    include: {
      model: TypeAttendee,
      required: true,
    },
  });
  console.log(oneTypeAttendee);
  return oneTypeAttendee.toJSON();
};

const searchTypeAttendeByReservation = async (id_reservation) => {  
  const reservation = await Reservation.findOne({
    where: {
      id_reservation: id_reservation,
    },
    include: PriceTypeAttendee
  });

  if (!reservation || !reservation.price_type_attendee) {
    throw new Error("No se encontró la reservación");
  }

  const id_type_attendee = reservation.price_type_attendee.type_attendee_id;

  const typeAttendee = await TypeAttendee.findOne({
    where: {
      id_type_attendee: id_type_attendee,
    }
  });
  
  if (!typeAttendee) {
    throw new Error("No se encontró el tipo de asistente");
  }

  return typeAttendee.toJSON();
};

const updatePriceTypeAttendee = async (id, priceTypeAttendeeObject, transaction) => new Promise(async (resolve, reject) => {
  try {
    const priceTypeAttendeeFound = await PriceTypeAttendee.findOne({
      where: {
        id_price_type_attendee: id
      }
    });

    if (!priceTypeAttendeeFound) {
      reject({ code: 404, message: "No se ha encontrado el tipo de precio de asistente" });
      return;
    }

    await priceTypeAttendeeFound.update(priceTypeAttendeeObject, { transaction });
    resolve(priceTypeAttendeeFound.toJSON());
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  searchTypeAttendeByEvent,
  searchTypeAttendeByReservation,
  updatePriceTypeAttendee,
};