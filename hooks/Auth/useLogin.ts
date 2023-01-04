import { AuthService } from '@/services/Auth';
import { useMutation } from '@tanstack/react-query';
import { LoginTypeParams } from '@/utils/types/AuthType';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginTypeParams) => await AuthService.Login(data),
  });
};
