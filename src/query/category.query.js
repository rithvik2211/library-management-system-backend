import { pool } from "../db.js";


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
        throw error;
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
        throw error;
    }
};