const handleHttpError = (res, err) => {
  console.log("Error: ", err);
  res.status(500).send({ error: "ERROR" });
};

const handleErrorResponse = (res, message = "Error en el servidor", code = 401) => {
  res.status(code).send({ error: message });
};

module.exports = { handleHttpError, handleErrorResponse };
