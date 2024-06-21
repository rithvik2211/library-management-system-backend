
import { addNewBook, deleteBook, getAllBooks, getBookDetails, updateBook } from "../query/books.query.js";
import { AppError } from "../utils/customError.js";


export const getAllBookService = async (body) => {

    try {
        let { title, limit, page } = body;
        let offset = 0;
        if (!title) title = '';
        let author = title;
        if (!limit) limit = 12;
        if (!offset) offset = 0;

        offset = page * limit;

        const result = await getAllBooks({ title, author, limit, offset });
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        if (data.count == 0) throw new AppError('No data found', 404);
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
        if (data.count == 0) throw new AppError('No book with this id found', 404);
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
        if (data.count == 0) throw new AppError('No data found', 404);
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
        if (data.count == 0) throw new AppError('No data found', 404);

        return data;
    } catch (error) {
        throw error;
    }
};
