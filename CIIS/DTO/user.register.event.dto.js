const { Type } = require("@sinclair/typebox");
const addErrors = require("ajv-errors");
const addFormats = require("ajv-formats");

const { handleErrorResponse } = require("../middlewares/handleError");
const Ajv = require("ajv");

const UserRegisterEventDto = Type.Object(
  {
    name: Type.String(),
    firstLastname: Type.String(),
    secondLastname: Type.String(),
    email: Type.String({
      format:"email",
      errorMessage: {
        type: "El campo email debe ser una cadena",
        format: "El formato email no es válido"
    },
    }),
    phone: Type.String(),
    career: Type.String(),
    studycenter: Type.String(),
    typeattendee:Type.String({ pattern: '^[0-9]+$' }),
    numvoucher:{
      ignore:true,
    },
    "g-recaptcha-response":{
      ignore:true,
    }
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "El formato no es válido",
    },
  }
);

const ajv = new Ajv({ allErrors: true, messages: true })
  .addKeyword("kind")
  .addKeyword("modifier")
  .addKeyword("ignore",{
    validate: () => true,
    errors: false
  });
addFormats(ajv, ["email"]);
addErrors(ajv);

const validateSchema = ajv.compile(UserRegisterEventDto);

const userRegisterDTO = (req, res,next) => {
  const isDTOValid = validateSchema(req.body);

  if (!isDTOValid) {
    const errors = validateSchema.errors.map((error) => error.message);
    handleErrorResponse(res, {errors, received: req.body}, 400);
    return;
  }
  
  next();
};

module.exports=userRegisterDTO;
