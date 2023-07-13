const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathName = req.pathName; //Indica el nombre de la carpeta destino
    cb(null, path.join(__dirname, "../../build", "voucher"));
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "-" + uuidv4();
    cb(null, fileName + "." + file.originalname.split(".").pop());
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png"];

  const fileExt = file.originalname.split(".").pop();
  if (allowedExtensions.includes(fileExt)) {
    cb(null, true); // Permitir la subida del archivo
  } else {
    cb(new Error("Tipo de archivo no válido."), false); // Rechazar la subida del archivo
  }
};

const upload = multer({ storage: storage });

module.exports = upload;
