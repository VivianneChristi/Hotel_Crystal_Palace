const { Router } = require("express");
const usersController = require('../controllers/usersController');
const hotelController = require('../controllers/hotelController')

const router = Router();


// Rotas de API relacionadas a usuários
router.get('/users', usersController.getAllUsers);
router.get('/users/:email', usersController.getUserByEmail);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Rota para nova senha
//router.post('/users/newPassword/:id/:token', usersController.newPasswordUser);

// Rota para efetuar login
router.post('/users/login', usersController.login)

// Rota para ver todas as reservas de um User
// router.get('/hotel/user:id', hotelController.getAllReserves)

// Rota para reservas do hotel
router.post('/hotel', hotelController.createReserve)

module.exports = router;
