const { Router } = require('express');
const router = Router();

// const handleGet = (req, res) => res.send('<h1>Hey buddy! this is an api...<br>here we do not provide user interfaces 🥴</h1>')
const handleGet = (req, res) => res.send({
	"nombres": "Anselmo César",
	"primer apellido": "Farfan",
	"segundo apellido": "Pajuelo",
	"edad": 20,
})

router.get('/', handleGet)

module.exports = router;