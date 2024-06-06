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
        const updateDB = await this.writeUsersToFile(users);
        return updateDB;

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


    static async updatePassword(user) {
        const validar = await this.verificar(user);

        return validar

    };

    static async verificar(user) {

        const users = await this.getUser();

        const nomeIs = await users.find(n => n.nome === (nome));

        if (nomeIs === true) {

            const emailIs = await users.find(e => e.email === (email));

            if (emailIs === true) {

                const tokenIs = await users.find(t => t.token === (token));

                if (tokenIs === true) {

                    return true;

                } else {

                    return false;

                }

            } else {

                return false;
            }

        } else {

            return false;
        }

    }



    static async gerarToken() {

        const randomNum = Math.floor(Math.random() * 999999);
        return randomNum;
    };


}





module.exports = usersRepository;