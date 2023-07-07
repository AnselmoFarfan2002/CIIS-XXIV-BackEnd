const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const path = require('path')

const CIIS_API_ROUTES = require('./CIIS/routes/ciis.routes.js')

dotenv.config()
const app = express()

//middlewares 🔥
app.use(morgan('dev'))
app.use('/api', CIIS_API_ROUTES)
app.use( express.static(path.join(__dirname, 'build')) )
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//settings ⚙️
app.set('PORT', process.env.SERVER_PORT || 777)

/* Server set up 🏭 */
app.listen( app.get('PORT'), (err) => {
    if(err) console.log('Server had fallen. 😢')
    else console.log('Server is alive! 🤑', app.get('PORT'))
})