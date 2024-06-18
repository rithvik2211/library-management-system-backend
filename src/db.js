
import pg from "pg";
import { config } from "dotenv";

config({ path: './.env' });

const { Pool } = pg;

export const pool = new Pool({
    user: 'library_management_system_y3n5_user',
    password: 'c6F6GwpcdTeBuO2m7qkWNJMEWLQgGSYE',
    host: 'dpg-cpoqdnqju9rs738u8jrg-a.oregon-postgres.render.com',
    port: 5432,
    database: 'library_management_system_y3n5',
    ssl: true,
});