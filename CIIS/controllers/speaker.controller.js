const { handleHttpError, handleErrorResponse } = require("../middlewares/handleError");
const speakerService = require("../services/speaker.service");

const getSpeakersByEvent = async (req, res) => {
    try {
        const { idEvent } = req.params;
        const speakers = await speakerService.getSpeakersByEvent(idEvent);
        res.json(speakers);
    } catch (error) {
        if (typeof error.code === "number") {
            handleErrorResponse(res, error.message, error.code);
            return;
        }
        handleHttpError(res, error);
    }
}

module.exports = {
    getSpeakersByEvent,
};