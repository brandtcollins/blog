import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/quill.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
