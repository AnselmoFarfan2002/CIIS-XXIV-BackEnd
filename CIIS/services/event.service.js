const { Op } = require("sequelize");
const Event = require("../models/Events");
const Gallery=require("../models/GalleryEvents");
const TypeEvent=require("../models/TypeEvent");

const getEvents = async (query) => {
  if (!Object.keys(query).length) {
    const events = await Event.findAll();
    return events;
  }

  const { page = 1, limit = 8, search = "" } = query;

  const whereCondition = {};

  if (search) {
    whereCondition[Op.or] = [{ name: { [Op.like]: `%${search}%` } }];
  }
  const offset = (page - 1) * limit;

  const { count, rows } = await Event.findAndCountAll({
    where: whereCondition,
    offset: parseInt(offset),
    limit: parseInt(limit),
  });

  const totalPages = Math.ceil(count / limit);
  return {
    events: rows,
    totalPages,
    currentPage: page,
  };
};

const getOneEvent = async (id) => {
  const event = await Event.findOne({
    where: {
      id_event:id,
    },
  });
  return event;
};

const createEvent = async (eventObject) => {
  const newEvent = await Event.create(eventObject);
  return newEvent;
};

const updateEvent = async(id,body) =>{
  
  const eventFound=await Event.findOne({
    where:{
      id
    }
  });

  await eventFound.update(body);
};

const deleteEvent = async(id) => {
  
  await Event.destroy({
    where:{
      id,
    }
  })
};

const getEventImagesByType=async({type=null})=>{
  
  if(!type){
    const eventsGallery=await Event.findAll({
      include:[{
        model:Gallery,
        attributes:['name','dir_photo']
      }]
    });
    return eventsGallery;
  }
  const galleryTypeEvent=await Event.findAll({
    where:{
      typeEventId:type
    },
    include:[{
      model:Gallery,
      attributes:['name','dir_photo']
    }]
  });

  return galleryTypeEvent;
}

const searchEventActive = async (event) => {
  const oneEvent = await Event.findOne({
    where: {
      id_event:event,
      active:true,
    },
  });
  return (oneEvent);
};

module.exports = {
  getEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventImagesByType,
  searchEventActive
};
