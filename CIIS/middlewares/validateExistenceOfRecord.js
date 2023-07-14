const { searchEventActive } = require("../services/event.service");
const {searchTypeAttendeByEvent}=require("../services/typeAttendee.service");
const { handleErrorResponse } = require("./handleError");

const validateKeyTypeAttende=async(req,res,next)=>{
    
    if(!req.query ||
        Object.keys(req.query).length===0 ||
        !req.query.event){
        handleErrorResponse(res,"No se ha especificado el evento",400);
        return;
    }

    const {typeattendee}=req.body;
    const {event}=req.query;

    const existEvent=await searchEventActive(event);
    if(!existEvent){
        handleErrorResponse(res,"No se ha encontrado el evento",400);
        return;
    }

    const existTypeAttendee=await searchTypeAttendeByEvent(typeattendee,event);

    if(!existTypeAttendee){
        handleErrorResponse(res,"No se ha encontrado el tipo de asistente al evento",400);
        return;
    }

    next();

}

module.exports={
    validateKeyTypeAttende,

}