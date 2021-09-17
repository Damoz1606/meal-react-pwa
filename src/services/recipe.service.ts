import axios from 'axios';

const URI: string = "https://www.themealdb.com/api/json/v1/1";

export const getCategories = async () => {
    return await axios.get(`${URI}/list.php?c=list`);
}

export const getRecipes = async () => {
    return await axios.get(`${URI}/filter.php?a=Canadian`);
}

export const getRecipeID = async (id: string) => {
    return await axios.get(`${URI}/lookup.php?i=${id}`);
}

export const getRecipeName = async (name: string) => {
    return await axios.get(`${URI}/search.php?s=${name}`);
}

export const getRecipeCategory = async (category: string) => {
    return await axios.get(`${URI}/filter.php?c=${category}`);
}