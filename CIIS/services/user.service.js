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
    attributes:['name_user','lastname_user'],
    where:{
      code_user:code
    }
  });

  return userFound;
}
module.exports = {
  createRegisterUser,
  getUserInfoByCode
};
