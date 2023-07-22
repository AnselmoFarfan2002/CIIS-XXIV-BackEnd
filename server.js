const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const CIIS_API_ROUTES = require('./CIIS/routes/index.routes')
const {app:configServer}=require("./CIIS/config/development.js")
class Server{
    constructor(){
        this.app=express();
        this.server=require("http").createServer(this.app);
        this.io=require("socket.io")(this.server);
        
        this.config();
        this.routes();
    }

    config(){
        this.app.set('PORT', configServer.port)
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    socket(){

    }
    routes(){
        this.app.use('/api', CIIS_API_ROUTES)
        this.app.use(express.static(path.join(__dirname, 'build')))
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        })
    }

    listen(){
        this.server.listen( this.app.get('PORT'), (err) => {
            if(err) console.log('Server had fallen. 😢')
            else console.log('Server is alive! 🤑', this.app.get('PORT'));
        })
    }
}

module.exports=Server;

// const express = require("express")
// const morgan = require("morgan")
// const dotenv = require("dotenv")
// const path = require('path')

// const CIIS_API_ROUTES = require('./CIIS/routes/ciis.routes.js')

// dotenv.config()
// const app = express()

// //middlewares 🔥
// app.use(morgan('dev'))
// app.use('/api', CIIS_API_ROUTES)
// app.use(express.static(path.join(__dirname, '../cliente/build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../cliente/build', 'index.html'));
// })

// //settings ⚙️
// app.set('PORT', process.env.SERVER_PORT || 777)

// /* Server set up 🏭 */
// app.listen( app.get('PORT'), (err) => {
//     if(err) console.log('Server had fallen. 😢')
//     else console.log('Server is alive! 🤑', app.get('PORT'))
// })