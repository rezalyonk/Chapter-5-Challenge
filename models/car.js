import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cars = db.define('cars',{
    name_mobil: {
        type: DataTypes.STRING
    },
    harga_mobil: {
        type: DataTypes.INTEGER
    },
    manufacture: {
        type: DataTypes.STRING
    },
    year_mobil: {
        type: DataTypes.INTEGER
    },
    available: {
        type: DataTypes.BOOLEAN
    },
    transmission: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true
});

export default Cars;