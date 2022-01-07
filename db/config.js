const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Successful database connection')
    } catch (error) {
        console.log(error)
        throw new Error('Error to try inizialiting database')
    }
}

module.exports = { 
    dbConnection
}