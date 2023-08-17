const Reservation = require("../models/Reservation");
const { uploadImage, deleteImage } = require("../utils/upload.img");

const createReservationEvent = async (
  registerObject,
  files,
  attendeeuniversity,
  transaction
) => {
  return new Promise(async (resolve, reject) => {
    let pathTemp = "";
    let objectDir = [];
    try {
      const reservationCreated = await Reservation.create(registerObject, {
        transaction,
      });
      const { imgvoucher } = files;
      const voucherUploaded = await uploadImage(
        imgvoucher,
        "private",
        "voucher",
        ["jpg", "jpeg", "png"]
      );

      objectDir.push(voucherUploaded.filename);
      pathTemp = voucherUploaded.filename;

      if (!attendeeuniversity) {
        reservationCreated.dir_voucher = voucherUploaded.filename;
        await reservationCreated.save({ transaction });
        resolve({ ok: true, objectDir });
        return;
      }
      const { fileuniversity } = files;
      const fileuniversityUploaded = await uploadImage(
        fileuniversity,
        "private",
        "file-university",
        ["jpg", "jpeg", "png"]
      );

      reservationCreated.dir_voucher = voucherUploaded.filename;
      reservationCreated.dir_fileuniversity = fileuniversityUploaded.filename;
      await reservationCreated.save({ transaction });

      objectDir.push(fileuniversityUploaded.filename);

      resolve({ ok: true, objectDir });
      return;
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        // Manejar el error de campo único
        reject({
          code: 409,
          message: "El número de voucher ya fue utilizado, ¡ingrese uno nuevo!",
        });
        return;
      } else if (error.file == "file-university") {
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

const updateReservationEvent = async (
  id,
  registerObject,
  files,
  attendeeuniversity,
  transaction
) => {
  return new Promise(async (resolve, reject) => {
    let pathTemp = "";
    let objectDir = [];
    console.log("initinitinit");
    try {
      console.log("registerObjectregisterObjectregisterObject");
      console.log(registerObject);

      const ReservationFound = await Reservation.findOne({
        where: {
          id_reservation: id,
        },
      });

      console.log("ReservationFoundReservationFoundReservationFound");
      console.log(ReservationFound);

      const reservationCreated = await ReservationFound.update(registerObject, {
        transaction,
      });

      // const reservationCreated = await Reservation.update(registerObject, {
      //   transaction,
      // });

      console.log(
        "reservationCreatedreservationCreatedreservationCreated Updated"
      );
      console.log(reservationCreated);

      const { filevoucher } = files;
      const voucherUploaded = await uploadImage(filevoucher,"private","voucher", [
        "jpg",
        "jpeg",
        "png",
      ]);

      console.log("voucherUploadedvoucherUploadedvoucherUploaded");
      console.log(voucherUploaded);

      objectDir.push(voucherUploaded.filename);
      pathTemp = voucherUploaded.filename;
      if (!attendeeuniversity) {
        reservationCreated.dir_voucher = voucherUploaded.filename;
        await reservationCreated.save({ transaction });

        resolve({ ok: true, objectDir });
        return;
      }

      const { fileuniversity } = files;
      const fileuniversityUploaded = await uploadImage(
        fileuniversity,
        "private",
        "file-university",
        ["jpg", "jpeg", "png"]
      );

      console.log(
        "fileuniversityUploadedfileuniversityUploadedfileuniversityUploaded"
      );
      console.log(fileuniversityUploaded);

      reservationCreated.dir_voucher = voucherUploaded.filename;
      reservationCreated.dir_fileuniversity = fileuniversityUploaded.filename;

      await reservationCreated.save({ transaction });

      objectDir.push(fileuniversityUploaded.filename);

      resolve({ ok: true, objectDir });
      return;
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        reject({
          code: 409,
          message: "El número de voucher ya fue utilizado, ¡ingrese uno nuevo!",
        });
        return;
      } else if (error.file == "file-university") {
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

module.exports = {
  createReservationEvent,
  updateReservationEvent,
};
