import ApiService from '@/services/Api';
import { Inter } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

import configs from '@/configs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import ProtectedRoutes from '@/utils/helpers/ProtectedRoutes';
import { GlobalProvider } from '@/store/GlobalState';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps) {
  const { env } = configs;
  const router = useRouter();

  const [queryClient] = useState(() => new QueryClient());

  const publicRouter = ['/'];

  return (
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <main className={`${inter.variable} font-sans`}>
            {publicRouter.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoutes>
                <Component {...pageProps} />
              </ProtectedRoutes>
            )}
          </main>
          {env == 'development' ? <ReactQueryDevtools /> : null}
        </Hydrate>
      </QueryClientProvider>
    </GlobalProvider>
  );
}
