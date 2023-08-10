const {Router}=require("express");
const routerReports=Router();
const {getReportsRegistrations}=require("../../controllers/reports.controller");
const reportReservationDTO=require("../../DTO/reports.reservations.dto");

routerReports.get('/event/:idEvent/registrations',reportReservationDTO,getReportsRegistrations);


module.exports=routerReports;