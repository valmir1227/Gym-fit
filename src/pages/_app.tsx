import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/globalStyle";
import Header from "../components/Header/Header";
import MenuMobile from "../components/MenuMobile/MenuMobile";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
