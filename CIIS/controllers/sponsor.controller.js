const { handleHttpError, handleErrorResponse } = require("../middlewares/handleError");
const sponsorService = require("../services/sponsor.service");

const getSponsorsByEvent = async (req, res) => {
    try {
        const { idEvent } = req.params;
        const sponsors = await sponsorService.getSponsorsByEvent(idEvent);
        res.json(sponsors);
    } catch (error) {
        if (typeof error.code === "number") {
            handleErrorResponse(res, error.message, error.code);
            return;
        }
        handleHttpError(res, error);
    }
}

module.exports = {
    getSponsorsByEvent,
};