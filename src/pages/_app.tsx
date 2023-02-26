import type { AppProps } from "next/app";
import { Poppins } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import "../styles/tailwind.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } }
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
      {`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
        }
      `}
      </style>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
