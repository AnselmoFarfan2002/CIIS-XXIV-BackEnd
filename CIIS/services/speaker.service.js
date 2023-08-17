const Conferences = require("../models/Conferences");
const Events = require("../models/Events");
const Speakers = require("../models/Speakers");

const getSpeakersByEvent = async (id) => {
    return new Promise (async (resolve, reject) => {
        const event = await Events.findByPk(id);
        if (!event) {
            reject({code: 404, message: "No se ha encontrado el evento"});
            return;
        }
        const speakers = await Speakers.findAll({
            include: [
                {
                    model: Conferences,
                    attributes: [],
                    where: {
                        event_id: id,
                    },
                },
            ],
            distinct: true,
        });
        if (speakers.length == 0) {
            reject({code: 404, message: "No se han encontrado ponentes para este evento"});
            return;
        }
        const speakersMap = speakers.map((speaker) => {
            return {
                id: speaker.id_speaker,
                name: speaker.name_speaker,
                role: speaker.ocupation_speaker,
                university: speaker.university_speaker,
                socialNetwork: speaker.email_speaker,
                phone: speaker.phone_speaker,
                desc: speaker.about_profile_speaker,
                avatar: speaker.img_dir_speaker,
                placeWork: speaker.work_place_speaker,
                nacionality: speaker.nationality_speaker,
                linkedin: speaker.linkedin_speaker,
            };
        });
        resolve(speakersMap);
    })
}

module.exports = {
    getSpeakersByEvent
}; 