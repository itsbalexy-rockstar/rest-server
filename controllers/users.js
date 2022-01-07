const { response } = require('express')
const res = require('express/lib/response')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const getUsers = (req, res = response) => {

    const data = req.query
     
    res.json({
         name: 'GET',
         message: 'Answer from GET',
         data
     });
}
const postUsers = async(req, res) => {

    const { name, email, password, role } = req.body
    const user = new User({ name, email, password, role} )

    //email
    // const isThereAnEmail = await User.findOne({email})
    // if (isThereAnEmail){
    //     return res.status(400).json({
    //         message: 'Email already exists'
    //     })
    // }
    
    //encrypt the password
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)
    
    //save in DB
    await user.save()
    
    //return an object called user
    res.json({
        user
    });
}
const putUsers = (req, res) => {
    
    const id = req.params.id
    
    res.json({
        name: 'PUT',
        message: 'Answer from PUT',
        id
    });
}
const deleteUsers = (req, res) => {
    
    res.json({
        name: 'DELETE',
        message: 'Answer from DELETE'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}