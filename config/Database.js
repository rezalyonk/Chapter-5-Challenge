import {Sequelize} from "sequelize";

const db = new Sequelize('binar_car_db','root','',{ // 'binar_car_db' itu nama Database, 'root' itu username, '' itu password
    host: "localhost",
    dialect: "mysql"
});

export default db;