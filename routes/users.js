const { Router } = require('express')
const { 
    getUsers, 
    postUsers, 
    putUsers, 
    deleteUsers } = require('../controllers/users')
const { check } = require('express-validator')
const { shieldValidator } = require('../middlewares/shieldValidator')
const { roleValidator, isThereAnEmail } = require('../helpers/dbValidator')
const User = require('../models/user')

const router = Router()

router.get('/api', getUsers)
router.post('/api', [
    check('email').custom(isThereAnEmail),
    // check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain at least 6 characters').isLength( {min:6} ),
    //check('role', 'Role is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']), 
    check('role').custom(roleValidator),
    shieldValidator
], postUsers)
router.put('/api/:id', putUsers)
router.delete('/api', deleteUsers)

module.exports = router