const Ajv = require("ajv");

const ajv = new Ajv();




const createEventDTO = {
  type: "object",
  properties: {
    id_event: {
      type: "integer",
      minLength: 1,
    },
    name: {
      type: "string",
    },
    about: {
      type: "string",
    },
    place: {
      type: "string",
    },
    start_date: {
      type: "string",
    },
    exp_date: {
      type: "string",
    },
    price: {
      type: "float32",
    },
    dir_logo: {
      type: "string",
    },
    dir_brouchere: {
      type: "string",
    },
  },
};
