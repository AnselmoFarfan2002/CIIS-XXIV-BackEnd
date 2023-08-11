const { Router } = require("express");
const routerUser = Router();
const { checkAuth, checkRole } = require("../../middlewares/auth");
const userRegisterDTO = require("../../DTO/user.register.dto");
const { createUserOrganizer } = require("../../controllers/user.controller");

routerUser.post('/', checkAuth, checkRole(["Administrador"]), userRegisterDTO, createUserOrganizer);

module.exports=routerUser;