const { Router } = require("express");

const usersController = require('../controllers/usersController');

const router = Router();


// Cadastro
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Login

router.put('/users/newPassword/:id/:token', usersController.newPasswordUser);



module.exports = router;