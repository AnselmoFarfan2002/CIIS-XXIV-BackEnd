const {Router}=require("express");
const fileUpload=require("express-fileupload");
const routerRegister=Router();
const userRegisterDTO=require("../../DTO/user.register.event.dto")
const {createPreRegisterUser}=require("../../controllers/reservation.controller");
const upload=require("../../controllers/uploadFileController");
const uploadFile = require("../../middlewares/upload.file");


routerRegister.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

routerRegister
.post('/',uploadFile("imgvoucher"),userRegisterDTO,createPreRegisterUser);

module.exports=routerRegister;