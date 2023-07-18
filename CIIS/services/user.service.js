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


// const sequelize = require("../config/database");
// const createPreRegisterUser = async (userObject) => {
//     const t = await sequelize.transaction();
//   try {

//     const user = await User.create(userObject, {transaction:t});
//     await t.commit();
//     return user;
//   } catch (error) {
//     await t.rollback();
//     throw error;
//   }
// };

module.exports = {
  createRegisterUser,
};
