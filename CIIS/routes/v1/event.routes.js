const {Router}=require("express");
const routerEvent=Router();
const {getEvents,getOneEvent, getEventImages,registerAttendance}=require("../../controllers/event.controller");
const conferenceAttendanceDTO=require("../../DTO/conference.attendance.dto");
const {validateExistUser}=require("../../middlewares/validateExistenceOfRecord");
const { checkAuth, checkRole } = require("../../middlewares/auth");

routerEvent.post('/:idEvent/attendance',checkAuth,
checkRole(["Administrador","Organizador"]),conferenceAttendanceDTO,validateExistUser,registerAttendance);
routerEvent.get('/gallery',getEventImages);
routerEvent.get('/:idEvent',getOneEvent);
routerEvent
.get('/',getEvents);



module.exports=routerEvent;