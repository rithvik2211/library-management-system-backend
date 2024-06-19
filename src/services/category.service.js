import { addNewCategory, getAllCategories } from "../query/category.query.js";

export const addNewCategoryService = async (body) => {

    try {
        const { name } = body;
        const result = await addNewCategory({ name });

        const data = {
            data: result.rows,
            count: result.rowCount
        };

        return data;
    } catch (error) {
        throw error;
    }
};
export const getAllCategoriesService = async (body) => {

    try {
        const result = await getAllCategories();
        const data = {
            data: result.rows,
            count: result.rowCount
        };
        return data;
    } catch (error) {
        throw error;
    }
};
