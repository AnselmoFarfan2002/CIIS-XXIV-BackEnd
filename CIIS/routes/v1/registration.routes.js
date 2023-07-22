const { Router } = require("express");
const registrationRouter = Router();
const { getRegistrations, changeStatusRegistration }=require("../../controllers/registration.controller");
const { verifySession }=require("../../middlewares/verifySession");

registrationRouter.get('/', verifySession, getRegistrations);
registrationRouter.patch('/:id/status', verifySession, changeStatusRegistration);

module.exports = registrationRouter;