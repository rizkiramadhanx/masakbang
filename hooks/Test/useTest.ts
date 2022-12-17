import { RecipeService } from '@/services/Recipe';
import { useQuery } from '@tanstack/react-query';

export const useTest = () => {
  return useQuery({
    queryKey: ['jajaj'],
    queryFn: async () => await RecipeService.getApiTest(),
  });
};
