import {
  paramGetRecipeBySearch,
  paramsGetAllRecipeByPage,
} from '@/utils/types/RecipeTypes';
import ApiService from './Api';

const RecipeService = {
  getApiTest: async () => {
    const requestData = {
      method: 'get',
      url: '/',
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getAllRecipeByPage: async ({ page }: paramsGetAllRecipeByPage) => {
    const requestData = {
      method: 'get',
      url: `/api/recipes/${page || ''}`,
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getAllCategoryRecipe: async () => {
    const requestData = {
      method: 'get',
      url: `/api/category/recipes`,
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getRecipeBySearch: async ({ query }: paramGetRecipeBySearch) => {
    const requestData = {
      method: 'get',
      url: `/api/search/?q=${query}`,
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export { RecipeService };
