import { RecipeService } from '@/services/Recipe';
import {
  paramGetRecipeBySearch,
  ResponseDataRecipes,
} from '@/utils/types/RecipeTypes';
import { useQuery } from '@tanstack/react-query';

export const useGetRecipeBySearch = ({ query }: paramGetRecipeBySearch) => {
  return useQuery<ResponseDataRecipes>({
    queryKey: ['use-get-recipe-by-search', { query }],
    queryFn: async () => RecipeService.getRecipeBySearch({ query }),
  });
};
