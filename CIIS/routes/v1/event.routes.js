const {Router}=require("express");
const routerEvent=Router();
const fileUpload=require("express-fileupload");
const {getEvents,getOneEvent, getEventImages,registerAttendance}=require("../../controllers/event.controller");
const {getTopicsToEvent}=require("../../controllers/topics.controller");
const conferenceAttendanceDTO=require("../../DTO/conference.attendance.dto");
const {validateExistUser,validateExistEvent,validateFormDataToUploadImages}=require("../../middlewares/validateExistenceOfRecord");
const { checkAuth, checkRole } = require("../../middlewares/auth");

routerEvent.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

routerEvent.post('/:idEvent/attendance',checkAuth,
checkRole(["Administrador","Organizador"]),conferenceAttendanceDTO,validateExistUser,registerAttendance);
routerEvent.get('/:idEvent/topics',validateExistEvent,getTopicsToEvent);
routerEvent.post('/:idEvent/gallery',validateExistEvent,validateFormDataToUploadImages(["name","priority","image"]),(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.sendStatus(201);
});
routerEvent.get('/gallery',getEventImages);
routerEvent.get('/:idEvent',getOneEvent);
routerEvent
.get('/',getEvents);



module.exports=routerEvent;