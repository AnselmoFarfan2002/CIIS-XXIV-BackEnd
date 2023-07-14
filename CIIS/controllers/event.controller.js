const EventService=require("../services/event.service");
const {handleHttpError}=require("../middlewares/handleError");
const { ItemsGalleryDTO, EventsGalleryTypeDTO } = require("../DTO/events-gallery-type.dto");
const getEvents=async(req,res)=>{
    try {
        const events=await EventService.getEvents(req.query);
        res.json(events);
    } catch (error) {
        handleHttpError(res,error);
    }
}

const getOneEvent=async(req,res)=>{
    try {
        const {idEvent}=req.params;

        const event=await EventService.getOneEvent(idEvent);

        res.status(200).json(event);
    } catch (error) {
        handleHttpError(res,error);
    }
}

const createEvent=(req,res)=>{

}

const updateEvent=(req,res)=>{

}

const deleteEvent=(req,res)=>{

}


const getEventImages=async(req,res)=>{
    try {

        const eventsGallery= await EventService.getEventImagesByType(req.query);

        const eventsGalleryByType=eventsGallery.map(event=>{
            const galleryByEvent=event.Gallery_Events.map(item=>new ItemsGalleryDTO(item.dir_photo,item.name));
            return new EventsGalleryTypeDTO(event.name,event.about,galleryByEvent);
        })

        res.json(eventsGalleryByType);
    } catch (error) {
        handleHttpError(res,error);
    }
}
module.exports={
    getEvents,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventImages
}