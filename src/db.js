import { createPool } from "mysql2/promise";
import { DB_DATABASE,
         DB_HOST,
         DB_PORT,
         DB_USER,
         DB_PASSWORD,
} from "./config.js";

export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT
});