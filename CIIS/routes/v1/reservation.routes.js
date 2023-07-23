const {Router}=require("express");
const fileUpload=require("express-fileupload");
const routerRegister=Router();
const userRegisterDTO=require("../../DTO/user.register.event.dto")
const {createPreRegisterUser, getImagesOfTheReserve, updateEnrollmentStatus}=require("../../controllers/reservation.controller");
const uploadFile = require("../../middlewares/upload.file");
const handleRecaptcha = require("../../middlewares/handleRecaptcha");
const { validateKeyTypeAttende } = require("../../middlewares/validateExistenceOfRecord");
const { checkAuth, checkRole } = require("../../middlewares/auth");
const reservationViewImagesDTO = require("../../DTO/reservation.view.image.dto");
const { reservationUpdateStatusDTO } = require("../../DTO/reservation.update.dto");


routerRegister.patch('/:idReserve/status',reservationUpdateStatusDTO,updateEnrollmentStatus);
routerRegister.get('/:idReserve/files/:folder',reservationViewImagesDTO,checkAuth,checkRole(['Administrador']),getImagesOfTheReserve);



routerRegister.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

/**
 * En producción
 */
// routerRegister
// .post('/',handleRecaptcha,uploadFile("imgvoucher"),userRegisterDTO,validateKeyTypeAttende,createPreRegisterUser);


/**
 * En desarrollo (desactivamos el handleRecaptcha)
 */
routerRegister
.post('/',uploadFile("imgvoucher"),userRegisterDTO,validateKeyTypeAttende,createPreRegisterUser);

module.exports=routerRegister;