import { ResponseApiCommon, ResponseApiCommonSingle } from './CommonType';

export type paramsGetAllRecipeByPage = {
  page: number;
};

export type paramGetRecipeBySearch = {
  query?: string | null;
};

export type paramsGetDetailRecipe = {
  key: string;
};

export type detailRecipe = {
  title: string;
  thumb: string;
  serving: string;
  times: string;
  difficulty: string;
  author: {
    user: string;
    datePublished: string;
  };
  desc: string;
  ingredient: Array<string>;
  step: Array<string>;
};

export type responseDetailRecipe = ResponseApiCommonSingle<detailRecipe>;

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
