const { Type } = require("@sinclair/typebox");
const Ajv = require("ajv");
const addErrors = require("ajv-errors");
const addFormats = require("ajv-formats");
const { handleErrorResponse } = require("../middlewares/handleError");

const UserUpdateEventDto = Type.Object({
    name: Type.Optional(Type.String({
        pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ '-]+$",
        minLength: 1,
        errorMessage: "Debe especificar sus nombres",
    })),
    lastname: Type.Optional(Type.String({
        pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ '-]+$",
        minLength: 1,
        errorMessage: "Debe especificar sus apellidos",
    })),
    email: Type.Optional(Type.String({
        format: "email",
        errorMessage: {
            type: "Debe ser un string",
            format: "Debe ser un email válido",
        },
    })),
    dni: Type.Optional(Type.String({
        minLength: 8,
        maxLength: 20,
        errorMessage: "El DNI no es válido",
    })),
    phone: Type.Optional(Type.String({
        minLength: 1,
        errorMessage: "Debe especificar un número de contacto",
    })),
    career: Type.Optional(Type.String()),
    studycenter: Type.Optional(Type.String()),
    numvoucher: Type.Optional(Type.String({
        minLength: 1,
        errorMessage: "Debe especificar un número de operación",
    })),
    enrollmentstatus: Type.Optional(Type.String({
        minLength: 1,
        errorMessage: "Debe especificar un status",
    })),
});

const ajv = new Ajv({ allErrors: true, messages: true });

addFormats(ajv, ["email"]);
addErrors(ajv, { keepErrors: false });
const validate = ajv.compile(UserUpdateEventDto);

const userUpdateDTO = (req, res, next) => {
    const isDTOValid = validate(req.body);
    
    const { files } = req;
    if (!isDTOValid) {
        const errors = validate.errors.map((error) => error.message);
        handleErrorResponse(res, errors, 400);
        return;
    } else if ((Object.keys(req.body).length == 0) && (files == undefined)) {
        handleErrorResponse(res, "Se debe enviar al menos un dato", 400);
        return;
    }
    next();
};

module.exports = userUpdateDTO;