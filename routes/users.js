const { Router } = require('express')
const { 
    getUsers, 
    postUsers, 
    putUsers, 
    deleteUsers } = require('../controllers/users')

const router = Router()

router.get('/api', getUsers)
router.post('/api', postUsers)
router.put('/api/:id', putUsers)
router.delete('/api', deleteUsers)

module.exports = router