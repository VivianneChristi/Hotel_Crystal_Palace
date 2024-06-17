
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
            res.status(201).json({ msg: 'Usuário Criado com Sucesso!' });  // Retorna a resposta de sucesso se a criação do usuário passar
        } else {
            res.status(500).json({ error: userSemValidacao });
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
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(404).json({ error: `Usuário não encontrado! ${user}` })
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

}

/*exports.newPasswordUser = async (req, res) => {

    try {

        console.log(req.body);
        const user = await usersRepository.updatePassword(req.params.id, req.params.token, req.body);

        console.log(user)

        if (user === true) {
            res.status(201).json({ msg: 'Senha alterada com sucesso!' })
        } else {
            res.status(500).json({ error: `${user}` });
        }
    } catch (error) {
        res.status(500).json({ error: err.toString() });
    }

}*/



exports.login = async (req, res) => {
    try {

        const loginIsValid = await usersRepository.loginVerificar(req.body);

        if (loginIsValid === true) {
            res.status(201).json({ msg: 'Logado!', logado: true });
        } else {
            res.status(500).json({ error: `${loginIsValid}` });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: err.toString() });
    }
}




