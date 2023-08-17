const Speaker = require("../models/Speakers");
const Conference = require("../models/Conferences");
const { uploadImage } = require("../utils/upload.img");
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
  createSpeaker,
  createConferenceToSpeaker,
};
