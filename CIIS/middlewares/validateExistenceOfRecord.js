const { searchEventActive } = require("../services/event.service");
const {
  searchTypeAttendeByReservation,
} = require("../services/priceTypeAttendee.service");
const {validateExtensionsToFile} = require("../utils/upload.img");
const { handleErrorResponse,handleHttpError } = require("./handleError");
const {getUserByDniOrCode}=require("../services/user.service");

// Valida que el evento exista y que el tipo de asistente este relacionado con este
const validateKeyTypeAttende = async (req, res, next) => {
  if (!req.query || Object.keys(req.query).length === 0 || !req.query.event) {
    handleErrorResponse(res, "No se ha especificado el evento", 404);
    return;
  }

  const { typeattendee } = req.body;
  const { event } = req.query;

  const existEvent = await searchEventActive(event);
  if (!existEvent) {
    handleErrorResponse(res, "No se ha encontrado el evento", 404);
    return;
  }

  // verify exists a price for type attendee and the event
  const existTypeAttendee = await searchTypeAttendeByEvent(typeattendee, event);

  if (!existTypeAttendee) {
    handleErrorResponse(
      res,
      "No se ha encontrado un precio válido para este evento",
      404
    );
    return;
  }

  req.priceTypeAttendee=existTypeAttendee.id_price_type_attendee;

  const { isuniversity } = existTypeAttendee.type_attendee;

  if (!isuniversity) {
    req.attendeeuniversity = false;
    next();
    return;
  }

  /** Al ser un asistente universitario se valida que exista
   * el file de su documento universitario
   **/

  if (
    !req.files ||
    Object.keys(req.files).length === 0 ||
    !req.files["fileuniversity"]
  )
    return handleErrorResponse(
      res,
      "Carnet o ficha de matrícula requerida",
      400
    );

  if (!validateExtensionsToFile(["jpg", "jpeg", "png"], req.files["fileuniversity"])) {
    return handleErrorResponse(
      res,
      "La extensión del archivo no es válida",
      400
    );
  }
  req.attendeeuniversity = true;
  next();
};


const validateFileVoucher = async (req, res, next) => {
	if(!req.files) {
		next();
  }
  else if(!req.files["filevoucher"]) {
		next();
	} else {
    if(!validateExtensionsToFile(["jpg","jpeg","png"], req.files["filevoucher"])) {
      return handleErrorResponse(
        res,
        "La extensión del archivo no es válido",
        400
      );
    }
    next();
  }
}

const validateFileUniversity = async (req, res, next) => {
  if(!req.files) {
		next();
  }
  else if(!req.files["fileuniversity"]) {
		next();
  } else {
    const { idReserve } = req.params;
    
    const existTypeAttendee = await searchTypeAttendeByReservation(idReserve);
    if (!existTypeAttendee) {
      handleErrorResponse(res, "No se ha encontrado el tipo de asistente", 404);
      return;
    }
    
    const { isuniversity } = existTypeAttendee;
    if(!isuniversity) {
      if(req.files["fileuniversity"]) {
        return handleErrorResponse(res, "No debe enviarse una matrícula si es público general", 400);
      }
    } else {
      if(!validateExtensionsToFile(["jpg","jpeg","png"], req.files["fileuniversity"])) {
        return handleErrorResponse(res, "La extensión del archivo no es válido", 400);
      }
    }

    req.attendeeuniversity = isuniversity;
    next();
  }
}

const validateExistUser=async(req,res,next)=>{
  try{
    const {user}=req.query;

    const userFound=await getUserByDniOrCode(user);

    req.idUser=userFound.id_user;

    next();
  }catch(error){
    if (error.code) {
      return handleErrorResponse(res, error.message, error.code);
    }
    return handleHttpError(res, error);
  }
}

module.exports = {
  validateFileVoucher,
  validateFileUniversity,
  validateKeyTypeAttende,
  validateExistUser
};

