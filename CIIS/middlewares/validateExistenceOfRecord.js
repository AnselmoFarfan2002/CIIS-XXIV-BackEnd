const { searchEventActive } = require("../services/event.service");
const {searchTypeAttendeByEvent}=require("../services/typeAttendee.service");
const { handleErrorResponse } = require("./handleError");


//Valida que el evento exista y que el tipo de asistente este relacionado con este
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

    const {isuniversity}=existTypeAttendee;

    if(!isuniversity){
        req.attendeeuniversity=false;
        next();
        return;
    }

    /** Al ser un asistente universitario se valida que exista
     * el file de su documento universitario
    **/

    if(!req.files ||
        Object.keys(req.files).length===0 ||
        !req.files["fileuniversity"]){
        res.status(400).json({msg:"Carnet o ficha de matrícula requerida"});
        return;
    }
    req.attendeeuniversity=true;
    next();
}

module.exports={
    validateKeyTypeAttende,

}