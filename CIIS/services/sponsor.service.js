const Events = require("../models/Events");
const Sponsors = require("../models/Sponsors");

const getSponsorsByEvent = async (id) => {
    return new Promise (async (resolve, reject) => {
        const event = await Events.findByPk(id);
        if (!event) {
            reject({code: 404, message: "No se ha encontrado el evento"});
            return;
        }
        const sponsors = await Sponsors.findAll({
            include: [
                {
                    model: Events,
                    attributes: [],
                    where: {
                        id_event: id,
                    },
                },
            ],
        });
        if (sponsors.length == 0) {
            reject({code: 404, message: "No se han encontrado auspiciadores para este evento"});
            return;
        }
        const sponsorsMap = sponsors.map((sponsor) => {
            return {
                id: sponsor.id_sponsor,
                name: sponsor.name_sponsor,
                img: sponsor.dir_img_sponsor
            };
        });
        resolve(sponsorsMap);
    })
}

module.exports = {
    getSponsorsByEvent
}; 