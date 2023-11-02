const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Reservations = require("../models/Reservation");
const Conferences = require("../models/Conferences");

const ConferenceAttendance = sequelize.define(
  "conference_attendance",
  {
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true, // Add contrainst to unique id reservation and conference
        fields: ["conference_id", "reservation_id"],
        name: "unique_conference_reservation",
      },
    ],
  }
);

Reservations.hasMany(ConferenceAttendance, {
  foreignKey: "reservation_id",
});

ConferenceAttendance.belongsTo(Reservations, {
  foreignKey: "reservation_id",
});

Conferences.hasMany(ConferenceAttendance, {
  foreignKey: "conference_id",
});

ConferenceAttendance.belongsTo(Conferences, {
  foreignKey: "conference_id",
});

module.exports = ConferenceAttendance;
