import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/gobal";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      <Head>
        <title>Design System</title>
        <meta name="description" content="DS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />

          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  );
}
