
import { addNewBook, deleteBook, getAllBooks, getBookDetails, updateBook } from "../query/books.query.js";


export const getAllBookService = async (body) => {

    try {
        const result = await getAllBooks();
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        return data;

    } catch (error) {
        throw error;
    }

};

export const addNewBookService = async (body) => {
    try {
        const { title, author, category, description } = body;
        const result = await addNewBook({ title, author, category, description });
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        return data;
    } catch (error) {
        throw error;
    }

};
export const updateBookService = async (body) => {
    try {
        const { title, author, category, description, id } = body;
        const result = await updateBook({ title, author, category, description, id });
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        return data;
    } catch (error) {
        throw error;
    }

};
export const deleteBookService = async (body) => {
    try {
        const { id } = body;
        const result = await deleteBook({ id });
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        return data;
    } catch (error) {
        throw error;
    }
};
export const getBookDetailsService = async (body) => {
    try {
        const { id } = body;
        const result = await getBookDetails({ id });
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        return data;
    } catch (error) {
        throw error;
    }
};
