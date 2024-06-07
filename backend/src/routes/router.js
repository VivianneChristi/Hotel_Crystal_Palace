const { Router } = require("express");

const usersController = require('../controllers/usersController');

const router = Router();

router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);

//router.get('/users/newPassword/:id', usersController.newPasswordUser);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;