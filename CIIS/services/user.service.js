const User = require("../models/Users");

const createRegisterUser = async (userObject,transaction) => {
    const user = await User.create(userObject,{transaction});
    return user;
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
