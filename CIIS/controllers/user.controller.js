const sequelize = require("../config/database");
const { nanoid } = require("nanoid");
const { handleHttpError } = require("../middlewares/handleError");
const { encrypt }=require("../utils/password.utils"); 
const { getDateTime } = require("../utils/getdate.utils");
const UserDTO = require("../DTO/user.dto");
const userService = require("../services/user.service");
const { createRecordAudit } = require("../services/audit.log.service");

const createRegister = async(req, res) => {
  // try {
  //   const userDTO=new UserDTO(...Object.values(req.body));
  //   const code=nanoid(15);
  //   userDTO.code=code;
  //   userDTO.role=2;
  //   const userCreated=await userService.createPreRegisterUser(userDTO);
    
  //   res.status(201).json(userCreated);
  // } catch (error) {
  //   console.log(error);
  //   handleHttpError(res,error);
  // }
};

const createUserOrganizer = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, lastname, phone, email, password, dni } = req.body;

    const userObject = {
      name_user: name,
      lastname_user: lastname,
      phone_user: phone,
      email_user: email,
      password_user: await encrypt(password),
      dni_user: dni,
      code_user: nanoid(15),
      role_id: "2",
      university_career_user: "Ingeniería en informática y sistemas",
      study_center_user: "UNJBG"
    };

    const userCreated =  await userService.createRegisterUser(userObject, transaction);

    const recordAuditObject = {
      table_name: "users",
      action_type: "create",
      action_date: getDateTime(),
      user_id: req.iduser,
      record_id: userCreated.id_user,
      new_data: null
    };

    await createRecordAudit(recordAuditObject, transaction);

    await transaction.commit();
    res.sendStatus(201);
  } catch (error) {
    await transaction.rollback();

    return handleHttpError(res, error);
  }
};

module.exports = {
  createRegister,
  createUserOrganizer,
};