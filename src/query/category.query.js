import { pool } from "../db.js";
import { AppError } from "../utils/customError.js";


export const addNewCategory = async (data) => {
    try {
        const { name } = data;

        const query = {
            text: "INSERT INTO category(category_name) VALUES($1) RETURNING *;",
            values: [name]
        };

        const result = await pool.query(query);
        // console.log(result);
        return result;

    } catch (error) {
        throw new AppError('Db error', 400);
    }
};
export const getAllCategories = async (data) => {
    try {
        // const { name } = data;

        const query = {
            text: "SELECT * FROM category;",
            values: []
        };

        const result = await pool.query(query);

        // console.log(result);
        return result;

    } catch (error) {
        throw new AppError('Db error', 400);
    }
};