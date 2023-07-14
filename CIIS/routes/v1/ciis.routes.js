const { Router } = require('express');
const router = Router();
const eventRoute=require("./event.routes");
const galleryEventRoute=require("./galleryEvent.routes");
const typeEventRoute=require("./typeEvent.routes");
const userRoute=require("./user.routes");
const reservationRoute=require("./reservation.routes");


const handleGet = (req, res) => res.send('<h1>Hey buddy! this is an api...<br>here we do not provide user interfaces 🥴</h1>')

router.get('/', handleGet)
router.use('/events',eventRoute);
router.use(galleryEventRoute);
router.use('/types-event',typeEventRoute);
router.use('/user',userRoute);
router.use('/register',reservationRoute);

module.exports = router;