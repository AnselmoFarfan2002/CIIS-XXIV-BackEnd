const { Router } = require('express');
const sessionRouter = Router();
const userLoginDTO=require('../../DTO/user.login.event.dto');
const { startSession, endSession }=require('../../controllers/session.controller');
const { verifySession }=require("../../middlewares/verifySession");

sessionRouter.post('/', userLoginDTO, startSession);
sessionRouter.delete('/', verifySession, endSession);

module.exports = sessionRouter;