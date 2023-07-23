const Reservation = require("../models/Reservation");
const { uploadImage, deleteImage } = require("../utils/upload.img");

const createReservationEvent = async (
  registerObject,
  files,
  attendeeuniversity,
  transaction
) => {
  return new Promise(async (resolve, reject) => {
    let pathTemp='';
    let objectDir=[];
    try {
      const reservationCreated = await Reservation.create(registerObject, {
        transaction,
      });
      const { imgvoucher } = files;
      const voucherUploaded = await uploadImage(imgvoucher, "voucher", [
        "jpg",
        "jpeg",
        "png",
      ]);

      pathTemp=voucherUploaded.filename;

      if (!attendeeuniversity) {
        reservationCreated.dir_voucher = voucherUploaded.filename;
        await reservationCreated.save({ transaction });
        resolve({ ok: true });
        return;
      }
      const { fileuniversity } = files;
      console.log(voucherUploaded.filename)
      const fileuniversityUploaded = await uploadImage(
        fileuniversity,
        "file-university",
        ["jpg", "jpeg", "png"]
        );
        
      reservationCreated.dir_voucher = voucherUploaded.filename;
      reservationCreated.dir_fileuniversity = fileuniversityUploaded.filename;
      await reservationCreated.save({ transaction });
      objectDir.push(voucherUploaded.filename);
      objectDir.push(fileuniversityUploaded.filename);

      resolve({ ok: true,objectDir });
      return;
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        // Manejar el error de campo único
        reject({
          code: 409,
          message: "El número de voucher ya fue utilizado, ¡ingrese uno nuevo!",
        });
        return;
      }else if(error.file=="file-university"){
        await deleteImage(pathTemp);
        reject(error);
        return;
      } else {
        reject(error);
        return;
      }
    }
  });
};

const getFilesOfReserve=async(nameFolder,idReserve)=>{
  const folders={
    UNIVERSITY:"dir_fileuniversity",
    VOUCHER:"dir_voucher"
  };

  const folder=(folders[`${nameFolder}`])?folders[`${nameFolder}`]:'dir_voucher';
  
  const reserveFound=await Reservation.findOne({
    attributes:[[folder,'dirimage']],
    where:{
      id_reservation:idReserve
    },
    raw:false
  });

  return reserveFound.toJSON();
}

const updateReservation=async(id,reservationObject,transaction)=> new Promise(async(resolve, reject) => {
  try {
    
    const reservationFound=await Reservation.findOne({
      where:{
        id_reservation:id
      }
    });
  
    if(!reservationFound){
      reject({code:404 ,message:"No se ha encontrado la reservación"});
      return;
    } 
    await reservationFound.update(reservationObject,{transaction});
    resolve(reservationFound.toJSON());
  } catch (error) {
    reject(error);
  }
});

module.exports = {
  createReservationEvent,
  getFilesOfReserve,
  updateReservation
};
