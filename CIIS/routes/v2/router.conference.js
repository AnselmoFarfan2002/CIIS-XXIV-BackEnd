const {Router}=require("express")
const conferenceRouter=Router()
const {registerAttendanceByUser, registerAttendanceConferenceCurrent}=require("../../controllers/v2/conference.controller")
const {authMid}=require("../../middlewares/v2/auth");
const { validateExistUser, validateExistEvent } = require("../../middlewares/validateExistenceOfRecord");
const conferenceAttendanceDTO = require("../../DTO/conference.attendance.dto");
conferenceRouter
.post('/:conferenceId/attendance',authMid,registerAttendanceByUser)
.post('/event/:idEvent/attendance',authMid,conferenceAttendanceDTO,validateExistEvent,validateExistUser,registerAttendanceConferenceCurrent);
module.exports=conferenceRouter;