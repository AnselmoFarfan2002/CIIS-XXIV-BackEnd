const { nanoid } = require("nanoid");
const userService=require("../services/user.service");
const UserDTO=require("../DTO/user.dto");
const { handleHttpError } = require("../middlewares/handleError");

const createRegister = async(req, res) => {
  try {

    const userDTO=new UserDTO(...Object.values(req.body));
    const code=nanoid(15);
    userDTO.code=code;
    userDTO.role=2;
    const userCreated=await userService.createPreRegisterUser(userDTO);
    
    res.status(201).json(userCreated);
  } catch (error) {
    console.log(error);
    handleHttpError(res,error);
  }
};

module.exports = {
  createRegister,
};
