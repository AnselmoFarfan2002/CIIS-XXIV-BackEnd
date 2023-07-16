const { Router } = require('express');
const router = Router();
const CIIS_API_V1=require("./v1/ciis.routes");
// const handleGet = (req, res) => res.send('<h1>Hey buddy! this is an api...<br>here we do not provide user interfaces 🥴</h1>')
const handleGet = (req, res) => res.send({
	"nombres": "Anselmo César",
	"primer apellido": "Farfan",
	"segundo apellido": "Pajuelo",
	"edad": 20,
})

router.get('/', handleGet)
router.use('/v1',CIIS_API_V1);

module.exports = router;