

import { pool } from "../db.js";
import { AppError } from "../utils/customError.js";

export const getAllBooks = async (data) => {

    try {
        let { title, limit, offset } = data;

        const query = {
            text: `SELECT * FROM BOOKS WHERE title LIKE '%${title}%' LIMIT ${limit} OFFSET ${offset};`,
        };
        // console.log(query);

        const result = await pool.query(query);
        return result;
    } catch (error) {
        // console.log(error);
        throw new AppError('Db error', 500);
    }
};
export const addNewBook = async (data) => {

    try {
        const { title, author, category, description } = data;

        const query = {
            text: "INSERT INTO books(title, author, category, description) VALUES ($1,$2,$3, $4) Returning *;",
            values: [title, author, category, description]
        };

        const result = await pool.query(query);
        return result;
    } catch (error) {


        if (error.code === '23505') {
            throw new AppError('Title already exists', 409);
        } else {
            throw new AppError('Db error', 500);
        }


    }

};
export const updateBook = async (data) => {

    try {
        const { title, author, category, description, id } = data;

        const query = {
            text: "UPDATE books SET title=$1 , author=$2, category=$3, description=$4 WHERE id=$5",
            values: [title, author, category, description, id]
        };

        const result = await pool.query(query);
        return result;
    } catch (error) {
        throw new AppError('Db error', 500);
    }

};
export const deleteBook = async (data) => {

    try {
        const { id } = data;

        const query = {
            text: "DELETE FROM books WHERE id=$1",
            values: [id]
        };

        const result = await pool.query(query);
        return result;
    } catch (error) {
        throw error;
    }

};
export const getBookDetails = async (data) => {

    try {
        const { id } = data;

        const query = {
            text: "SELECT * FROM books WHERE id=$1",
            values: [id]
        };

        const result = await pool.query(query);
        return result;
    } catch (error) {
        throw new AppError('Db error', 500);

    }

};