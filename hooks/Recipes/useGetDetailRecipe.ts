import { RecipeService } from '@/services/Recipe';
import {
  paramsGetDetailRecipe,
  responseDetailRecipe,
} from '@/utils/types/RecipeTypes';
import { useQuery } from '@tanstack/react-query';

export const useGetDetailRecipe = ({ key }: paramsGetDetailRecipe) => {
  return useQuery<responseDetailRecipe>({
    queryKey: ['use-get-detail-recipe', { key }],
    queryFn: async () => RecipeService.getDetailRecipe({ key }),
  });
};
