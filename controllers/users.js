const { response } = require('express')
const res = require('express/lib/response')

const getUsers = (req, res) => {

    const data = req.query
     
    res.json({
         name: 'GET',
         message: 'Answer from GET',
         data
     });
}
const postUsers = (req, res) => {

    const body = req.body
    
    res.json({
        name: 'POST',
        message: 'Answer from POST',
        body
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