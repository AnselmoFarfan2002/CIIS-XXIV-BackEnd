const routerUser = require("./router.user");
const v2Router = require("express")();

const routerSession = require("./router.session");
const RouterInscription = require("./router.inscription");
const { authMid } = require("../../middlewares/v2/auth");

const fileUpload = require("express-fileupload");
const RouterTaller = require("./router.taller");
const RouterReservation = require("./router.reservation");
const RouterSpeaker = require("./router.speaker");
const RouterConference=require("./router.conference");

v2Router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
v2Router.use("/", routerUser);
v2Router.use("/", routerSession);
v2Router.use("/", RouterTaller);
v2Router.use("/", RouterSpeaker);
v2Router.use("/", authMid, RouterInscription);
v2Router.use("/", authMid, RouterReservation);
v2Router.use("/conference",RouterConference);

module.exports = v2Router;
