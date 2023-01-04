import ApiService from '@/services/Api';
import { useRouter } from 'next/router';
import { useState, useEffect, ReactNode } from 'react';

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(true);

  return <>{isLoggedIn ? children : <>askssj</>}</>;
};

export default ProtectedRoutes;
