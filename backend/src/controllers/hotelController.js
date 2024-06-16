const reserveRepository = require('../services/reserveRepository');
const userRepository = require('../services/userRepository')

exports.createReserve = async (req, res) => {

    try {
        const reserva = await reserveRepository.createReservation(req.body) // preciso saber qual o user tb

        if (reserva) {
            res.status(201).json(reserva + ' Concluída com sucesso!')
        } else {
            res.status(500).json({ Error: userSemValidacao });
        }

    } catch (error) {
        res.status(500).json({ error: err.toString() });
    }

};

