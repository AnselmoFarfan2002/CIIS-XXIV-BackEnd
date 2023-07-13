const {Router}=require("express");
const routerUser=Router();
const userRegisterDTO=require("../../DTO/user.register.dto")
const {createRegister}=require("../../controllers/user.controller");

routerUser
.post('/register',userRegisterDTO,createRegister);


module.exports=routerUser;