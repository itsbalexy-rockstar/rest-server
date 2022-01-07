const { response } = require('express')
const res = require('express/lib/response')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const getUsers = async(req, res = response) => {

    const { limit = 5, from = 0 } = req.query
    
    const query = { estado: true }
    
    const [ total, users ] = await Promise.all([
        User.countDocuments(query),
        User.find()
            .skip(Number(from))    
            .limit(Number(limit))
    ])
     
    res.json({
        total,
        users
    });
}
const postUsers = async(req, res) => {

    const { name, email, password, role, estado } = req.body
    const user = new User({ name, email, password, role, estado} )
    
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
const putUsers = async(req, res) => {
    
    const id = req.params.id
    const { _id, password, email, google, ...others } = req.body

    if (password){
        const salt = bcryptjs.genSaltSync()
        others.password = bcryptjs.hashSync(password, salt)
    }

    const user = await User.findByIdAndUpdate(id, others)
    
    res.json(user);
}
const deleteUsers = async (req, res) => {
    
    const { id } = req.params

    const user = await User.findByIdAndUpdate(id, {estado: false})
    
    res.json({
        user
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}