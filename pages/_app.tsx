import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import ApiService from '@/services/Api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import configs from '@/configs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ApiService.init(configs.apiURL);

export default function App({ Component, pageProps }: AppProps) {
  const { env } = configs;
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      {env == 'development' ? <ReactQueryDevtools /> : null}
    </QueryClientProvider>
  );
}
