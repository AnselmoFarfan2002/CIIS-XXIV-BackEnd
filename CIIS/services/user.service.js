const Roles = require("../models/Roles");
const User = require("../models/Users");

const createRegisterUser = async (userObject,transaction) => {
  return new Promise(async(resolve, reject) => {
    try {
      const user = await User.create(userObject,{transaction});
      resolve(user);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // Manejar el error de campo único
        reject({code:409,message:"El dni o email ya fue utilizado, ¡ingrese uno nuevo!"});
      } else {
        reject(error);
      }
    }
  })
};

const getUserInfoByCode=async(code)=>{
  const userFound=await User.findOne({
    attributes:['name_user','lastname_user','email_user'],
    where:{
      code_user:code
    }
  });

  return userFound.toJSON();
}

const getInfoRoleUserByCode=async(code)=>{
  const roleFound=await User.findOne({
    attributes:['id_user'],
    where:{
      code_user:code
    },
    include:[{
      model:Roles,
      attributes:['name_role']
    }]
  });

  return roleFound.toJSON();
}

const getEmailByUserId=async(id)=>{
  const userFound=await User.findOne({
    attributes:['email_user'],
    where:{
      id_user:id
    }
  });
  if(!userFound){
    throw new Error({code:404 ,message:"No se ha encontrado al usuario"});
  } 
  return userFound.toJSON();
}

module.exports = {
  createRegisterUser,
  getUserInfoByCode,
  getInfoRoleUserByCode,
  getEmailByUserId
};
