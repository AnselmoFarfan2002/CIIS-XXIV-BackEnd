const TypeAttendee=require("../models/TypeAttendee");

const searchTypeAttendeByEvent=async(type,event)=>{
    const oneTypeAttendee=await TypeAttendee.findOne({ where: 
        { 
            id_type_attendee:type,
            event_id:event 
        } });
    
    return (oneTypeAttendee);
}

module.exports={
    searchTypeAttendeByEvent,
}