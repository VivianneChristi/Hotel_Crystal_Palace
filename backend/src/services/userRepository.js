const { log } = require('console');
const { randomInt } = require('crypto');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

const fileName = 'users.json';
const filePath = path.join(__dirname, "..", "database", fileName);


class usersRepository {

    static async getAllUsers() {
        const users = await this.getUser();
        return users;
    };


    static async getUser() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    if (err.code === "ENDENT") {

                        this.writeUsersToFile([])
                        return [];
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    }


    static async writeUsersToFile(user) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(user), (err) => {
                if (err) reject(err);
                console.log(`Data written to file: ${filePath}`);
                resolve(this.getAllUsers());
            });
        });
    }



    static async getUserById(id) {
        const users = await this.getAllUsers();
        return users.find(user => user.id === parseInt(id));
    };


    static async createUser(user) {
        const users = await this.getAllUsers();
        user.token = await this.gerarToken();
        user.id = users.length + 1;
        users.push(user);
        const insertDB = await this.writeUsersToFile(users);
        return insertDB;
    }


    static async updateUser(id, user) {

        const users = await this.getUser();
        const index = users.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            return null;
        }
        users[index] = user;

        const userValido = await this.validarUser(user);


        console.log(userValido)

        if (userValido === true) {
            const updateDB = await this.writeUsersToFile(users);
            return updateDB;
        }

        return userValido
    }

    static async deleteUser(id) {
        const users = await this.getUser();
        const index = users.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            return null;
        } else {
            users.splice(index, 1);
        }
        await this.writeUsersToFile(users);
        return index;
    }


    static async validarUser(user) {

        const nome = user.nome;
        var respostaNome = await this.validarNome(nome);


        if (respostaNome !== true) {
            return respostaNome;
        }

        const email = user.email;
        var respostaEmail = await this.validarEmail(email)

        if (respostaEmail !== true) {
            return respostaEmail;
        }

        const senha = user.senha;
        var respostaSenha = await this.validarSenha(senha);

        if (respostaSenha !== true) {
            return respostaSenha;
        }

        return true;
    }


    static async validarNome(nome) {

        var isInvalid = '';
        var mensagemErro = 'Nome inválido!'
        const str = nome;
        isInvalid = await this.verificarCaracteres(str, mensagemErro);

        if (isInvalid === 'Válido') {
            return true;
        }


        return isInvalid;
    }

    static async validarEmail(email) {

        const users = await this.getUser();
        const emailIgual = users.find(p => p.email === email);
        const emailUser = email.split('');
        var tamanho = 0;
        var mensagemErro = 'Email Inválido! ';

        if (emailIgual !== undefined) {
            mensagemErro += 'Email já cadastrado, faça Login!'
            return mensagemErro;
        }

        if (emailUser.includes('@')) {

            for (let index = 0; index < email.length; index++) {
                const caracteres = email[index];

                if (caracteres === ' ') {

                    mensagemErro += 'Uso indevido de espaço.'

                    return mensagemErro;
                }


                tamanho++
            }

            const provedores = [
                'gmail.com',
                'outlook.com',
                'yahoo.com',
                'Gmail.com',
                'Outlook.com',
                'Yahoo.com'
            ]

            const temProvedorValido = provedores.some(provedor => email.includes(provedor));

            if (temProvedorValido) {

                if (tamanho <= 14) {
                    mensagemErro += 'Email não atingiu mínimo de caracteres.'
                    return mensagemErro;
                }

                if (tamanho >= 32) {
                    mensagemErro += 'Email excedeu o máximo de caracteres.'
                    return mensagemErro;
                }

                return true;

            } else {

                mensagemErro += 'Escreva corretamento o provedor de email.'

                return mensagemErro;
            }


        }

        mensagemErro += 'Escreva corretamento o endereço com @.'

        return mensagemErro;
    }

    static async validarSenha(senha) {

        var tamanho = 0;
        var mensagemErro = 'Senha Inválida! ';

        for (let index = 0; index < senha.length; index++) {
            const caracter = senha[index];

            if (caracter === ' ') {

                mensagemErro += 'Uso indevido de espaço.'

                return mensagemErro;
            }
            tamanho = index + 1;
        }


        if (tamanho < 4) {
            mensagemErro += 'A senha deve conter entre 4 e 8 caracteres.'
            return mensagemErro;
        }

        if (tamanho > 8) {
            mensagemErro += 'A senha deve conter entre 4 e 8 caracteres.'
            return mensagemErro;
        }


        return true;
    }

    static async verificarCaracteres(nome, mensagemErro) {
        const str = nome;
        var tamanho = 0;
        const name = str.split('');

        const caracteresInvalidos = ['*', '!', '#', '$', '%', '&', '(', ')', '+', '=', '§', '{', '}', '[', ']', 'ª', 'º', '?', '/', '_', '|', '"', '@', '-', '¬', '¢', '£', '.'];
        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        for (let index = 0; index < str.length; index++) {
            const caracter = str[index];

            if (caracteresInvalidos.includes(caracter)) {
                mensagemErro += ` Uso de caracteres Inválidos.`;
                return mensagemErro;
            }

            if (numeros.includes(caracter)) {
                mensagemErro += ` Uso de caracteres Inválidos, não adicione números.`;
                return mensagemErro;
            }

            tamanho = index + 1;
        }

        const invalidSpace = name.filter(caracter => caracter === ' ');
        if (invalidSpace.length > 2) {
            mensagemErro += ` Limite de uso de espaços execidido.`;
            return mensagemErro;
        }

        if (tamanho < 3) {
            mensagemErro += ` Limite minímo de caracteres não atendido.`;
            return mensagemErro;
        } else if (tamanho > 20) {
            mensagemErro += ` Limite máximo de caracteres excedido.`;
            return mensagemErro;
        }

        return 'Válido';
    }


    static async gerarToken() {

        for (let index = 0; index < 100; index++) {

            const randomNum = Math.floor(Math.random() * 999999);

            const users = await this.getAllUsers();

            const tokenIgual = users.find(p => p.token === randomNum);

            if (tokenIgual === undefined) {

                index = 100;

                console.log('criado token');
                return randomNum;
            }

        }

        return '000001';
    };

    static async updatePassword(id, token, newPassword) {

        console.log(id)
        console.log(newPassword)

        const users = await this.getUserById(id);

        console.log(users);

        const tokenUser = await this.validarToken(token, users);

        console.log(tokenUser)

        const senhaValida = await this.validarSenha(newPassword)

        console.log(senhaValida)
        /*
                if (senhaValida) {
                    const index = users.find(p => p.senha === senhaUser);
        
                    console.log(index)
                    if (index === -1) {
                        return 'Usuário não encontrado';
                    }
        
        
                    return true;
                }
        */

        return senhaValida
    }

    static async validarToken(token, user) {

        // terminar validação do token => terminar validação da nova senha
        //const contagem = 0;

        console.log(token)
        console.log(user)

        //const validacaoToken = user.find(p => p.token === token);

        //console.log(validacaoToken)

        /*if (validacaoToken !== undefined) {
            return true;
        }*/

        return false;
    }

    static async loginVerificar(user) {

        const userIsValidEmail = user.email;

        const userIsValidSenha = user.senha;

        const validEmail = await this.validarEmail(userIsValidEmail)

        if (validEmail) {

            const validSenha = await this.validarSenha(userIsValidSenha);

            console.log(validSenha);

            if (validSenha) {

                const users = await this.getAllUsers();

                const loginVerificarEmail = users.find(e => e.email === user.email);

                const loginVerificarSenha = users.find(s => s.senha === user.senha);


                if (loginVerificarEmail !== undefined && loginVerificarSenha !== undefined) {

                    return true;

                } else {

                    return 'Usuário não encontrado no Sistema';


                }

            } else {

                return validSenha
            }

        }

        return validEmail;

    }

}









module.exports = usersRepository;