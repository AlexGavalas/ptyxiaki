const router = require('express').Router();
const user = require('../users');

router.get('/allUsers', user.getAllUsers);
router.post('/createUser', user.createUser);
router.post('/updateUser', user.updateUser);
router.post('/deleteUser', user.deleteUser);

module.exports = router;
