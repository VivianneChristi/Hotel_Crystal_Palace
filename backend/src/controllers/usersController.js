const usersRepository = require('../services/userRepository');


exports.getAllUsers = async (req, res) => {

    try {
        const users = await usersRepository.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }

};

exports.getUserById = async (req, res) => {

    try {
        const user = await usersRepository.getUserById(req.params.id);

        if (!user) {
            res.status(404).json({ error: 'Usuário não encotrado' });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }

};

exports.createUser = async (req, res) => {
    try {
        const userSemValidacao = await exports.validarUser(req, res);  // Chama a função validarUser

        if (userSemValidacao === true) {
            const user = await usersRepository.createUser(req.body);
            res.status(201).json(user);  // Retorna a resposta de sucesso se a criação do usuário passar
        } else {
            res.status(500).json({ Error: userSemValidacao });
        }
    } catch (err) {
        res.status(500).json({ error: err.toString() });  // Retorna a resposta de erro se algo der errado
    }
};


/* ************************** */

exports.validarUser = async (req, res) => {
    try {
        const validacaoUser = await usersRepository.validarUser(req.body);
        return validacaoUser;  // Retorna o usuário se a validação passar
    } catch (err) {
        throw err;  // Repassa a exceção para ser capturada pela função chamadora
    }
};



exports.updateUser = async (req, res) => {
    try {
        const user = await usersRepository.updateUser(req.params.id, req.body);

        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' })
        } else {
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(500).json({ error: err.toString() });
    }
}

exports.deleteUser = async (req, res) => {

    try {
        const user = await usersRepository.deleteUser(req.params.id);

        if (user <= -1) {
            res.status(404).json({ error: 'Usuário não encotrado' });
        } else {
            res.status(200).json({ msg: 'Usuário deletado com sucesso!' });
        };
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }



    /* exports.newPasswordUser = async (req, res) => {
 
         try {
             const user = await usersRepository.updatePassword(req.params.id, req.body);
 
             if (!user) {
                 res.status(404).json({ error: 'Usuário não encontrado' })
             } else {
                 res.status(500).json(user);
             }
         } catch (error) {
             res.status(500).json({ error: err.toString() });
         }
 
     }*/


}