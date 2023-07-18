const {Router}=require("express");
const fileUpload=require("express-fileupload");
const routerRegister=Router();
const userRegisterDTO=require("../../DTO/user.register.event.dto")
const {createPreRegisterUser}=require("../../controllers/reservation.controller");
const uploadFile = require("../../middlewares/upload.file");
const handleRecaptcha = require("../../middlewares/handleRecaptcha");
const { validateKeyTypeAttende } = require("../../middlewares/validateExistenceOfRecord");


routerRegister.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

routerRegister
.post('/',uploadFile("imgvoucher"),userRegisterDTO,validateKeyTypeAttende,createPreRegisterUser);

module.exports=routerRegister;