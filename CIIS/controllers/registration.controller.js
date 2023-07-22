const registrationService = require("../services/registration.service");
const { handleHttpError, handleErrorResponse } = require("../middlewares/handleError");
const ReservationDTO = require("../DTO/reservation.dto");

const getRegistrations = async(req, res) => {
  try {
      const registrations = await registrationService.getRegistrations(req.query);
      res.json(registrations);
  } catch (error) {
      handleHttpError(res, error);
  }
}

const changeStatusRegistration = async(req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  if (!status || status < 1 || status > 3)
    return handleErrorResponse(res, "El estado no es válido", 400);
  
  try {
      const iserror = await registrationService.changeStatusRegistration(id, status);

      if (iserror == 1) {
        return handleErrorResponse(res, "El registro no ha sido encontrado", 400);
      } else {
        return res.send('Estado actualizado correctamente');
      }
  } catch (error) {
      handleHttpError(res, error);
  }
}

module.exports = {
  getRegistrations,
  changeStatusRegistration
};