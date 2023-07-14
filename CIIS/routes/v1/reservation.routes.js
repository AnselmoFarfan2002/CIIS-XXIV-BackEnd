const {Router}=require("express");
const fileUpload=require("express-fileupload");
const routerRegister=Router();
const userRegisterDTO=require("../../DTO/user.register.event.dto")
const {createPreRegisterUser}=require("../../controllers/reservation.controller");
const uploadFile = require("../../middlewares/upload.file");
const handleRecaptcha = require("../../middlewares/handleRecaptcha");


routerRegister.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

routerRegister
.post('/',handleRecaptcha,uploadFile("imgvoucher"),userRegisterDTO,createPreRegisterUser);

module.exports=routerRegister;