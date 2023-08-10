const sequelize= require("../config/database");
const {QueryTypes}= require("sequelize");
const Reservation = require("../models/Reservation");
const Users = require("../models/Users");
const PriceTypeAttendee = require("../models/PriceTypeAttendee");
// const AuditLog = require("../models/AuditLog");
sequelize.query
const getRegistrationsToUpload = async (event,status) => {
  return new Promise(async (resolve, reject) => {
    const query = `CALL reportsReservationsByEvent(:event,:status)`;
    const replacements = { event,status };
    try {
      const results = await sequelize.query(query, {
        replacements
      });

      if (!results) {
        reject({
          code: 404,
          message: "No se han encontrado registros en este evento",
        });
        return;
      }
  
      resolve(results);
    } catch (error) {
      reject(error);
    }

  });
};

module.exports = {
  getRegistrationsToUpload,
};
