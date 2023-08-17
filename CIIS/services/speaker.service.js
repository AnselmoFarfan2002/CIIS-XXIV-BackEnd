const Conferences = require("../models/Conferences");
const Events = require("../models/Events");
const Speaker = require("../models/Speakers");
const { uploadImage } = require("../utils/upload.img");

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

const createSpeaker = (speakerObject, fileImage, transaction) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dataObject = {
        name_speaker: speakerObject.name,
        lastname_speaker: speakerObject.lastname,
        ocupation_speaker: speakerObject.role,
        work_place_speaker: speakerObject.workplace,
        nationality_speaker: speakerObject.nationality,
        about_profile_speaker: speakerObject.description,
        linkedin_speaker: speakerObject.socialNetwork
      };

      let fileImageSpeaker = "";
      const speakerBuild = Speaker.build(dataObject, {
        transaction,
      });

      if (fileImage || !Object.keys(fileImage).length === 0) {
        fileImageSpeaker = await uploadImage(fileImage,"public", "speakers", [
          "jpg",
          "jpeg",
          "png",
        ]);
        speakerBuild.dir_img_speaker = fileImageSpeaker.filename;
      }

      const speakerCreated = await speakerBuild.save({transaction});

      resolve(speakerCreated);
    } catch (error) {
      reject(error);
    }
  });
};

const createConferenceToSpeaker = (conferenceObject, transaction) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conferenceCreated = await Conference.create(conferenceObject, {
        transaction,
      });
      resolve(conferenceCreated);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getSpeakersByEvent,
  createSpeaker,
  createConferenceToSpeaker,
};
