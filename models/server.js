const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');
require('dotenv').config()

class Server {
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        //DB
        this.connectionDB()

        //Middlewares

        this.middlewares()

        this.routes()
    }

    async connectionDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/', require('../routes/users'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Listening on port:', this.port)
        })
    }
}

module.exports = Server