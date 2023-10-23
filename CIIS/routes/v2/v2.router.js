const routerUser = require("./router.user");
const v2Router = require("express")();

const routerSession = require("./router.session");
const RouterInscription = require("./router.inscription");
const { authMid } = require("../../middlewares/v2/auth");

const fileUpload = require("express-fileupload");
const RouterTaller = require("./router.taller");

v2Router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
v2Router.use("/", routerUser);
v2Router.use("/", routerSession);
v2Router.use("/", RouterTaller);
v2Router.use("/", authMid, RouterInscription);

module.exports = v2Router;
