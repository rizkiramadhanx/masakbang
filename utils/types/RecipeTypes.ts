import { ResponseApiCommon } from './CommonType';

export type paramsGetAllRecipeByPage = {
  page: number;
};

export type paramGetRecipeBySearch = {
  query?: string | null;
};

export type dataRecipes = {
  title: string;
  thumb: string;
  key: string;
  times: string;
  serving: string;
  difficulty: string;
};

export type dataRecipesCategory = {
  category: string;
  url: string;
  key: string;
};

export type ResponseDataRecipes = ResponseApiCommon<dataRecipes>;

export type ResponseDataRecipesCategory =
  ResponseApiCommon<dataRecipesCategory>;
