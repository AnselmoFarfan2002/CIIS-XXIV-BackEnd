const Reservation=require("../models/Reservation");
const uploadImage = require("../utils/upload.img");

const createReservationEvent=async(registerObject,files,attendeeuniversity,transaction)=>{
    return new Promise(async(resolve, reject) => {
        try {
            
            const reservationCreated=await Reservation.create(registerObject,{transaction});        
            const {imgvoucher}=files;
            const voucherUploaded=await uploadImage(imgvoucher,"voucher",["jpg","jpeg","png"]);
            
            if(!voucherUploaded.ok){
              reject({ok:false,msg:voucherUploaded.msg,code:voucherUploaded.code});
              return;
            }
            
            if(!attendeeuniversity){
                reservationCreated.dir_voucher=voucherUploaded.filename;
                await reservationCreated.save({transaction});
                resolve({ok:true});
                return;
            }
            
            const {fileuniversity}=files;
            const fileuniversityUploaded=await uploadImage(fileuniversity,"file-university",["jpg","jpeg","png"]);
        
            if(!fileuniversityUploaded.ok){
                reject({ok:false,msg:voucherUploaded.msg,code:voucherUploaded.code});
                return;
            }
        
            reservationCreated.dir_voucher=voucherUploaded.filename;
            reservationCreated.dir_fileuniversity=fileuniversityUploaded.filename;
            await reservationCreated.save({transaction});
            resolve({ok:true})
            return;
        } catch (error) {
            reject({ok:false,msg:"Error en el servidor",error});  
        }
    })
}

module.exports={
    createReservationEvent,
}