

import express from "express";
import { addNewBookController, deleteBookController, getAllBooksController, updateBookController } from "../controllers/books.controller.js";


const booksRouter = express.Router();


booksRouter.get('/getAllbooks', getAllBooksController);
booksRouter.post('/addNewBook', addNewBookController);
booksRouter.patch('/updateBook', updateBookController);
booksRouter.delete('/deleteBook', deleteBookController);


export default booksRouter;

