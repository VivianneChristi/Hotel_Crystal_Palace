const { Router } = require("express");
const usersController = require('../controllers/usersController');

const router = Router();


// Rotas de API relacionadas a usuários
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Rota para nova senha
router.put('/users/newPassword/:id/:token', usersController.newPasswordUser);

// Rota para efetuar login
router.post('/users/login', usersController.login) 

module.exports = router;
