const { handleErrorResponse } = require("./handleError");

const uploadFile=(nameFile)=>(req,res,next)=>{
    if(!req.files ||
        Object.keys(req.files).length===0 ||
        !req.files[nameFile]){
        res.status(500).json({msg:"Archivo requerido"});
        return;
    }

    next();
}

module.exports=uploadFile;