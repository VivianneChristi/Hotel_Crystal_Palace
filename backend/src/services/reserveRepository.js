const fs = require('fs');
const path = require('path');

const fileName = 'reserves.json';
const filePath = path.join(__dirname, "..", "database", fileName);


class reserveRepository {


    static async getAllReserves() {
        const reserves = await this.getReserve();
        return reserves;
    };


    static async getReserve() {
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
                resolve(this.getAllReserves());
            });
        });
    }


    static async createReservation(reserva) {
        console.log(reserva);
        const reserves = await this.getAllReserves();
        reserva.id = reserves.length + 1;
        reserves.push(reserva);
        await this.writeUsersToFile(reserves);
        return 'Reserva';

    }



}



module.exports = reserveRepository;