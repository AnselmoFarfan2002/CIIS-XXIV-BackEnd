const { Type } = require("@sinclair/typebox");
const Ajv = require("ajv");
const addErrors = require("ajv-errors");
const addFormats = require("ajv-formats");
const { handleErrorResponse } = require("../middlewares/handleError");

// definir schema
const UserRegisterDto = Type.Object(
  {
    name: Type.String({
      pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ '-]+$",
      minLength: 1,
      errorMessage: "Debe ser un nombre válido",
    }),
    lastname: Type.String({
      pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ '-]+$",
      minLength: 1,
      errorMessage: "Debe ser un apellido válido",
    }),
    email: Type.String({
      format: "email",
      errorMessage: {
        type: "Debe ser un string",
        format: "Debe ser un email válido",
      },
    }),
    phone: Type.String({
      minLength: 1,
      errorMessage: "Debe ser un teléfono válido",
    }),
    password: Type.String({
        pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$",
        errorMessage: {
          type: "Debe ser un string",
          pattern: "Debe ser un password válido",
        },
    }),
    dni: Type.String({
      minLength: 8,
      maxLength: 20,
      errorMessage: "Debe ser un dni válido",
    }),
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "El formato no es válido",
    },
  }
);

const ajv = new Ajv({ allErrors: true, messages: true })

addFormats(ajv, ["email"]);
addErrors(ajv);
const validateSchema = ajv.compile(UserRegisterDto);

const userRegisterDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);

  if (!isDTOValid) {
    const errors = validateSchema.errors.map((error) => error.message);
    handleErrorResponse(res, errors, 400);
    return;
  }

  next();
};

module.exports = userRegisterDTO;