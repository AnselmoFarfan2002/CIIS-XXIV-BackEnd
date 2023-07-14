class EventsGalleryTypeDTO{
    constructor(title,description,items){
        this.title=title;
        this.description=description;
        this.items=items;
    }
}


class ItemsGalleryDTO{
    constructor(image,name){
        this.image=image;
        this.name=name;
    }
}

module.exports={
    EventsGalleryTypeDTO,
    ItemsGalleryDTO
}