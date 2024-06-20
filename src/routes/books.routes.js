

import express from "express";
import { addNewBookController, deleteBookController, getAllBooksController, getBookDetailsController, updateBookController } from "../controllers/books.controller.js";


const booksRouter = express.Router();


booksRouter.get('/getAllbooks', getAllBooksController);
booksRouter.get('/getBookDetails', getBookDetailsController);
booksRouter.post('/addNewBook', addNewBookController);
booksRouter.patch('/updateBook', updateBookController);
booksRouter.delete('/deleteBook', deleteBookController);


export default booksRouter;

