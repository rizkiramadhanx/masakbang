import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import ApiService from '@/services/Api';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import Router from 'next/router';

import configs from '@/configs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps) {
  const { env } = configs;

  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const isLogin = localStorage.getItem('key');

    if (isLogin !== 'true') Router.push('/login');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
        {env == 'development' ? <ReactQueryDevtools /> : null}
      </Hydrate>
    </QueryClientProvider>
  );
}
