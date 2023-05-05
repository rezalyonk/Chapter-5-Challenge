import express from "express";
import db from "./config/Database.js";
import Cars from "./models/car.js";

const app = express();
const host = 'localhost';
const PORT = 8000;

try {
    await db.authenticate();
    console.log('Database telah koneksi secara local loh');
    await Cars.sync();
} catch (error) {
    console.error(error);
}

app.listen(PORT, () => {
    console.log(`Server sudah berjalan cuy, silahkan buka http://localhost:${PORT}`);
});