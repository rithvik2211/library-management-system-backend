
import app from "./app.js";
import dotenv from "dotenv";
import { pool } from "./db.js";
import path from 'path';

const __dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, "./.env") });



pool.connect((err, client, release) => {
    if (err) {
        return console.error("Error acquiring client", err.stack);
    }
    client.query("SELECT NOW()", (err, result) => {
        release();
        if (err) {
            console.error("Error executing query", err.stack);
            throw err;
        }
        console.log("Connected to Database !");
    });
});

pool.on("error", function (err, client) {
    if (err) {
        console.log("error from client", err);
        process.exit(-1);
    }
});



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("App started on Port: ", PORT);
});