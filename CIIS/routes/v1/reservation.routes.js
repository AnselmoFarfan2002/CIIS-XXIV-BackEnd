const {Router}=require("express");
const routerRegister=Router();
const userRegisterDTO=require("../../DTO/user.register.dto")
const {createPreRegisterUser}=require("../../controllers/reservation.controller");
const formidable = require('formidable');
const upload=require("../../controllers/uploadFileController")

routerRegister
.post('/',upload.single('imgvoucher'),userRegisterDTO,createPreRegisterUser);


module.exports=routerRegister;