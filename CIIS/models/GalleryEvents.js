const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const GalleryEvents = sequelize.define(
  "Gallery_Events",
  {
    id_galleryPhoto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dir_photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName:'gallery_events',
    timestamps: false,
  }
);

module.exports=GalleryEvents;