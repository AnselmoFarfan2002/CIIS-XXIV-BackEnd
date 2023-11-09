const { handleErrorResponseV2, handleHttpErrorV2 } = require("../../middlewares/handleError");
const EventService=require("../../services/event.service");

const getCountAttendances = async (req, res) => {
    try {
      const { idEvent } = req.params;
      const { id:userId } = req.user;

      const attendances = await EventService.getCountAttendances(idEvent, userId);
      res.json(attendances);
    } catch (error) {
      if (error.code) {
        return handleErrorResponseV2(res, error.message, error.code);
      }
      return handleHttpErrorV2(res, error);
    }
  };

module.exports={
    getCountAttendances
}