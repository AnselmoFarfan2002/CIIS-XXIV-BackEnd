const { Router } = require("express");
const eventRouter = Router();

const { authMid } = require("../../middlewares/v2/auth");
const {
    validateExistUser,
    validateExistEvent,
  } = require("../../middlewares/validateExistenceOfRecord");
const { getCountAttendances } = require("../../controllers/v2/events.controller");

 eventRouter.get('/:idEvent/attendances',authMid,validateExistEvent,getCountAttendances);

 module.exports=eventRouter;