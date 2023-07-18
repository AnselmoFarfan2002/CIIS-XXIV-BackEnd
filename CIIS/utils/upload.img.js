const path=require("path");
const fs=require("fs");
const { v4: uuidv4 } = require("uuid");

const uploadImage = (file,namefolder,extensions=["jpg", "jpeg", "png"]) => {
  return new Promise((resolve, reject) => {
    //Valid Extensions
    const allowedExtensions = extensions;
    const fileExt = file.name.split(".").pop();
    if (!allowedExtensions.includes(fileExt)) {
      return reject({ok:false,
        message:`La extensión ${fileExt} no es válida`,
        code:400,
        file:`${namefolder}`
      });
    }
    const nameUniqueFile=uuidv4()+'.'+fileExt;

    const uploadPath=path.join(__dirname,`../../uploads/private/${namefolder}`,nameUniqueFile);

    file.mv(uploadPath,(err)=>{
        if(err){
            return reject({ok:false,message:"Error al guardar el archivo!",code:500});
        }
        resolve({ok:true,filename:`${namefolder}/${nameUniqueFile}`});
    });

  });
};


const deleteImage=async(filePath)=>{
  const PATH_FILE=path.join(__dirname,'../../uploads/private/',filePath);
  return fs.unlinkSync(PATH_FILE);
}
module.exports={
  uploadImage,
  deleteImage 
};
