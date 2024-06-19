

import express from "express";
import { addNewCategoryController, getAllCategoriesController } from "../controllers/category.controller.js";


const categoryRouter = express.Router();


categoryRouter.get('/getAllCategories', getAllCategoriesController);
categoryRouter.post('/addNewCategory', addNewCategoryController);


export default categoryRouter;

