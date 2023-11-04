const {Router}=require("express");
const routeConference=Router();
const {validateExistUser,validateExistEvent}=require("../../middlewares/validateExistenceOfRecord");
const {getConferenceDayUser} =require("../../controllers/conference.controller");

routeConference.get('/',getConferenceDayUser);

module.exports=routeConference;