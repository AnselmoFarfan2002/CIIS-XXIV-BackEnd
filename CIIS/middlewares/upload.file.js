const { handleErrorResponse } = require("./handleError");
const {validateExtensionsToFile}=require('../utils/upload.img');

const uploadFile = (nameFile,allowedExtensions) => (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files[nameFile])
    return handleErrorResponse(res, "Suba los documentos solicitados", 400);

  if(!validateExtensionsToFile(allowedExtensions, req.files[nameFile])){
    return handleErrorResponse(res, "La extensión del archivo no es válida", 400);
  }
  next();
};

module.exports = uploadFile;
