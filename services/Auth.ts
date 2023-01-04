import { LoginTypeParams } from '@/utils/types/AuthType';
import ApiService from './Api';

const AuthService = {
  Login: async (props: LoginTypeParams) => {
    const requestData = {
      method: 'post',
      data: props,
      headers: {
        'Content-Type': 'application/json',
      },
      url: '/api/login',
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export { AuthService };
