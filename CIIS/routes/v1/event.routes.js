const {Router}=require("express");
const routerEvent=Router();
const {getEvents,getOneEvent, getEventImages}=require("../../controllers/event.controller");

routerEvent.get('/gallery',getEventImages);
routerEvent.get('/:idEvent',getOneEvent);
routerEvent
.get('/',getEvents);



module.exports=routerEvent;