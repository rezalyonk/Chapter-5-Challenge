import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";

const app = express();
const host = 'localhost';
const PORT = 8000;

try {
    await db.authenticate();
    console.log('Database telah koneksi secara local loh');
} catch (error) {
    console.error(error);
}


// agar bisa menerima data dalam format json
app.use(express.json());
// menuju apis
app.use(router);

app.listen(PORT, () => {
    console.log(`Server sudah berjalan cuy, silahkan buka http://localhost:${PORT}`);
});