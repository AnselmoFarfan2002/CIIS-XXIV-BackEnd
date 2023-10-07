const http = {
  500: {
    error: "Ha ocurrido un error",
    reason:
      "El servidor no esta disponible en este momento, inténtelo más tarde",
    code: 500,
  },
  401: {
    error: "No autorizado",
    reason: "Es necesario estar identificado para realizar esto",
    code: 409,
  },
  409: {
    error: "Ha ocurrido un error",
    reason: "Recurso ya existente, surgió un conflicto en el servidor",
    code: 409,
  },
};

module.exports = http;
