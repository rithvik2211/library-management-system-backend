import { addNewBookService, deleteBookService, getAllBookService, getBookDetailsService, updateBookService } from "../services/books.service.js";



export const getAllBooksController = async (req, res, next) => {
    try {
        // const body = req.query;

        const result = await getAllBookService();
        return res.status(200).json({
            success: true,
            message: "Books from collection are:",
            length: result.count,
            data: result.data
        });
    } catch (error) {
        next(error);
    }
};

export const getBookDetailsController = async (req, res, next) => {
    try {
        const body = req.body;

        const result = await getBookDetailsService(body);
        return res.status(200).json({
            success: true,
            message: "Book details are:",
            length: result.count,
            data: result.data
        });
    } catch (error) {
        next(error);
    }
};
export const addNewBookController = async (req, res, next) => {
    try {

        const body = req.body;

        const result = await addNewBookService(body);
        return res.status(201).json({
            success: true,
            message: "Book added to collection",
            count: result.count,
            data: result.data
        });
    } catch (error) {
        next(error);
    }
};
export const updateBookController = async (req, res, next) => {
    try {

        const body = req.body;

        const result = await updateBookService(body);
        return res.status(201).json({
            success: true,
            message: "Book updated",
            count: result.count,
            data: result.data
        });
    } catch (error) {
        next(error);
    }
};

export const deleteBookController = async (req, res, next) => {
    try {

        const body = req.body;

        const result = await deleteBookService(body);
        return res.status(201).json({
            success: true,
            message: "Book deleted",
        });
    } catch (error) {
        next(error);
    }
};