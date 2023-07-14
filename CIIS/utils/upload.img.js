const path=require("path");
const { v4: uuidv4 } = require("uuid");

const uploadImage = (file,namefolder,extensions=["jpg", "jpeg", "png"]) => {
  return new Promise((resolve, reject) => {
    //Valid Extensions
    const allowedExtensions = extensions;
    const fileExt = file.name.split(".").pop();
    console.log(fileExt);
    if (!allowedExtensions.includes(fileExt)) {
      return reject({ok:false,
        msg:`La extensión ${fileExt} no es válida`,
        code:400
      });
    }
    const nameUniqueFile=uuidv4()+'.'+fileExt;

    const uploadPath=path.join(__dirname,`../../build/${namefolder}`,nameUniqueFile);

    file.mv(uploadPath,(err)=>{
        if(err){
            return reject({ok:false,msg:err,code:500});
        }
        resolve({ok:true,filename:`${namefolder}/${nameUniqueFile}`});
    });

  });
};

module.exports=uploadImage;
