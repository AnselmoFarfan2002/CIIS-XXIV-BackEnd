const PriceTypeAttendee = require("../models/PriceTypeAttendee");
const TypeAttendee = require("../models/TypeAttendee");
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

module.exports = {
  searchTypeAttendeByEvent,
};
