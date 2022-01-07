const  Role  = require('../models/role')
const User = require('../models/user')

const roleValidator = async(role = '') => {
    const isThereARole = await Role.findOne({ role })
    if (!isThereARole){
        throw new Error(`${role} is not registered in database`)
    }
}

const isThereAnEmail = async(email = '') => {
    const isThereAnEmail = await User.findOne({ email })
    if (isThereAnEmail){
         throw new Error(`${email} already exists`)
     }
}

module.exports = {
    roleValidator,
    isThereAnEmail
}