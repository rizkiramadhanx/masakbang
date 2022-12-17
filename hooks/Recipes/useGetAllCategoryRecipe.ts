import { RecipeService } from '@/services/Recipe';
import { ResponseDataRecipesCategory } from '@/utils/types/RecipeTypes';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCategoryRecipe = () => {
  return useQuery<ResponseDataRecipesCategory>({
    queryKey: ['use-get-all-recipe-by-page'],
    queryFn: async () => RecipeService.getAllCategoryRecipe(),
  });
};
