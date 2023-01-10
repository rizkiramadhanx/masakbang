import { GlobalContext } from '@/store/GlobalState';
import { useRouter } from 'next/router';
import { ReactNode, useContext, useEffect } from 'react';

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (state.isLogin === false) {
        router.replace('/login');
      }
    }
  }, [router]);

  return <>{state.isLogin ? children : undefined}</>;
};

export default ProtectedRoutes;
