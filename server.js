import express from "express";
import db from "./config/Database.js";
import Users from "./models/user.js";

const app = express();
const host = 'localhost';
const PORT = 8000;

try {
    await db.authenticate();
    console.log('Database telah koneksi secara local loh');
    await Users.sync();
} catch (error) {
    console.error(error);
}

app.listen(PORT, () => {
    console.log(`Server sudah berjalan cuy, silahkan buka http://localhost:${PORT}`);
});