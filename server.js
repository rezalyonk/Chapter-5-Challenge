import express from "express";

const app = express();

const host = 'localhost';
const PORT = 8000;

app.listen(PORT, () => {
    console.log('Server sudah berjalan cuy, silahkan buka http://localhost:', PORT);
});