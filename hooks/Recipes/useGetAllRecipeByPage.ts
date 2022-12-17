import { RecipeService } from '@/services/Recipe';
import {
  paramsGetAllRecipeByPage,
  ResponseDataRecipes,
} from '@/utils/types/RecipeTypes';
import { useQuery } from '@tanstack/react-query';

export const useGetAllRecipeByPage = ({ page }: paramsGetAllRecipeByPage) => {
  return useQuery<ResponseDataRecipes>({
    queryKey: ['use-get-all-recipe-by-page', { page }],
    queryFn: async () => RecipeService.getAllRecipeByPage({ page }),
  });
};
