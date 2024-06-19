import { addNewCategoryService, getAllCategoriesService } from "../services/category.service.js";



export const getAllCategoriesController = async (req, res, next) => {
    try {
        // const body = req.query;

        const result = await getAllCategoriesService();
        return res.status(200).json({
            success: true,
            message: "ALL Categories are:",
            length: result.count,
            data: result.data
        });
    } catch (error) {
        next(error);
    }
};
export const addNewCategoryController = async (req, res, next) => {
    try {
        // console.log(req.body);

        const body = req.body;

        const result = await addNewCategoryService(body);
        return res.status(201).json({
            success: true,
            message: "New Category added.",
            length: result.count,
            data: result.data
        });
    } catch (error) {
        next(error);
    }
};