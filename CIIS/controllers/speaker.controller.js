const sequelize = require("../config/database");
const {handleErrorResponse,handleHttpError}=require("../middlewares/handleError");
const speakerServices=require("../services/speaker.service");

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

const createSpeaker=async(req,res)=>{
    const transaction=await sequelize.transaction();
    try {
        const {avatar={}}=req.files;
        const speakerObject=req.body;
        const speaker=await speakerServices.createSpeaker(speakerObject,avatar,transaction);
        await transaction.commit();
        res.status(201).json(speaker);
    } catch (error) {
        await transaction.rollback();
        handleHttpError(res,error);
    }
}


module.exports={
  getSpeakersByEvent,
  createSpeaker
}
