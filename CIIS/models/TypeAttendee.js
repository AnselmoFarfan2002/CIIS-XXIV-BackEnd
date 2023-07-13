const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Events=require("./Events");

const TypeAttendee=sequelize.define('type_attendee',{
    id_type_attendee:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name_attendee:{
        type:DataTypes.STRING(20),
        allowNull:false,
    },
    price_attendee:{
        type:DataTypes.DECIMAL(6,2),
        allowNull:false,
    }
},{
    timestamps:false
});

Events.hasMany(TypeAttendee,{
    foreignKey:"event_id"
});

TypeAttendee.belongsTo(Events,{
    foreignKey:"event_id"
});

module.exports=TypeAttendee;