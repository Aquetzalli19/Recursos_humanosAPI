import { pool } from "../src/db.js";
import fs from 'fs';
import readline from "readline";

const insertUser= async () => {
    const file = readline.createInterface(fs.createReadStream('user.csv'));

    const user = [];

    file.on("line", async (line) => {
        user.push(line.split(','));
    })

    file.on("close", async () => {
        try{
            await pool.query("INSERT INTO user (user_name, user_mail, user_password) VALUES ?;", [user]) 
        }
        catch(e){
            console.log(e);
        }
    })
}

insertUser();
