const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Users=require("./Users");
const Events=require("./Events");
const TypeAttendee=require("./TypeAttendee");

const Reservation=sequelize.define("reservation",{
    id_reservation:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    num_voucher:{
        type:DataTypes.STRING(15),
        allowNull:false,
        unique:true,
    },
    dir_voucher:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    dir_fileuniversity:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    enrollment_status:{
        type:DataTypes.TINYINT(1),
        allowNull:false,
        defaultValue:1 
    },
    active:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    timestamps:false
});

Users.hasMany(Reservation,{
    foreignKey:"user_id"
});

Reservation.belongsTo(Users,{
   foreignKey:"user_id" 
});

Events.hasMany(Reservation,{
    foreignKey:"event_id"
})

Reservation.belongsTo(Events,{
    foreignKey:"event_id"
})

TypeAttendee.hasMany(Reservation,{
    foreignKey:"type_attendee_id"
})

Reservation.belongsTo(TypeAttendee,{
    foreignKey:"type_attendee_id"
})

module.exports=Reservation;
