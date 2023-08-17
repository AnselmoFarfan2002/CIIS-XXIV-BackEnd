const Reservation = require("../models/Reservation");
const {Op}=require("sequelize");
const Roles = require("../models/Roles");
const User = require("../models/Users");

const searchUserByReservation = async (id_reservation) => {  
  const reservation = await Reservation.findOne({
    where: {
      id_reservation: id_reservation,
    },
    include: User
  });

  if (!reservation || !reservation.user) {
    throw new Error("No se encontró la reservación");
  }

  return (reservation.user).toJSON();
};

const createRegisterUser = async (userObject,transaction) => {
  return new Promise(async(resolve, reject) => {
    try {
      const user = await User.create(userObject,{transaction});
      resolve(user);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // Manejar el error de campo único

        const userFound=await getInfoRoleUserByDni(userObject.dni_user);

        if(userFound.role.id_role==3){
          reject({code:409,message:"El dni o email ya fue utilizado, ¡ingrese uno nuevo!"});
          return;
        }

        resolve(userFound);
      } else {
        reject(error);
      }
    }
  })
};

const getUserInfoByCode=async(code)=>{
  return new Promise(async(resolve, reject) => {
    const userFound=await User.findOne({
      attributes:['id_user','name_user','lastname_user','email_user'],
      where:{
        code_user:code
      }
    });
    
    if(!userFound){
      reject({code:404,message:"El usuario no existe"});
      return;
    }
    resolve(userFound.toJSON());
  });
}

const getInfoRoleUserByCode=async(code='')=>{

  return new Promise(async(resolve, reject) => {
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
    if(!roleFound){
      reject({code:404,message:"El usuario no existe"});
      return;
    }

    resolve(roleFound.toJSON());
  })

}

const getEmailByUserId=async(id)=>{
  return new Promise(async(resolve, reject) => {
    const userFound=await User.findOne({
      attributes:['email_user'],
      where:{
        id_user:id
      }
    });
    if(!userFound){
      reject({code:404 ,message:"No se ha encontrado al usuario"});
      return;
    } 
    resolve(userFound.toJSON());
  })
}

const getUserInfoByDNI=(dni)=>{
  return new Promise(async(resolve, reject) => {
    const userFound=await User.findOne({
      attributes:['id_user','name_user','lastname_user','email_user'],
      where:{
        dni_user:dni
      }
    });
    
    if(!userFound){
      reject({code:404,message:"El usuario no existe"});
      return;
    }
    resolve(userFound.toJSON());
  });
}

const updateUser = async (id, userObject, transaction) => new Promise(async (resolve, reject) => {
  try {
    const userFound = await User.findOne({
      where: {
        id_user: id
      }
    });

    if (!userFound) {
      reject({ code: 404, message: "No se ha encontrado el usuario" });
      return;
    }

    await userFound.update(userObject, { transaction });
    resolve(userFound.toJSON());
  } catch (error) {
    reject(error);
  }
});

const getUserByDniOrCode=async(code)=>{
  return new Promise(async(resolve, reject) => {
    const userFound=await User.findOne({
      attributes:['id_user','name_user','lastname_user','email_user'],
      where:{
        [Op.or]:[
          {dni_user:code},
          {code_user:code}
        ]
      }
    });

    if(!userFound){
      reject({code:404,message:"El usuario no existe"});
      return;
    }
    resolve(userFound.toJSON());
  })
}

const getInfoRoleUserByDni=async(dni='')=>{

  return new Promise(async(resolve, reject) => {
    const userRoleFound=await User.findOne({
      attributes:['id_user'],
      where:{
        dni_user:dni
      },
      include:[{
        model:Roles,
        attributes:['id_role','name_role']
      }]
    });

    console.log(userRoleFound.toJSON());
    if(!userRoleFound){
      reject({code:404,message:"El usuario no existe"});
      return;
    }

    resolve(userRoleFound.toJSON());
  })

}

module.exports = {
  searchUserByReservation,
  createRegisterUser,
  getUserInfoByCode,
  getInfoRoleUserByCode,
  getEmailByUserId,
  getUserInfoByDNI,
  updateUser,
  getUserByDniOrCode,
  getInfoRoleUserByDni
};
