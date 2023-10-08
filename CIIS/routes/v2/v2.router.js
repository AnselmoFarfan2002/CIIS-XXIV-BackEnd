const routerUser = require("./router.user");
const v2Router = require("express")();

const routerSession = require("./router.session");
const routerInscription = require("./router.inscription");
const authMid = require("../../middlewares/v2/auth");

const fileUpload = require("express-fileupload");

v2Router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
v2Router.use("/", routerUser);
v2Router.use("/", routerSession);
v2Router.use("/", authMid, routerInscription);

module.exports = v2Router;