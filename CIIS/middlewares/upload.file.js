const { handleErrorResponse } = require("./handleError");

const uploadFile = (nameFile) => (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files[nameFile])
    return handleErrorResponse(res, "Suba los documentos solicitados", 400);

  next();
};

module.exports = uploadFile;
