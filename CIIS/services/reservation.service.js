const Reservation=require("../models/Reservation");

const createReservationEvent=async(registerObject,transaction)=>{
    const reservationCreated=await Reservation.create(registerObject,{transaction});        
    return reservationCreated;
}

module.exports={
    createReservationEvent,
}