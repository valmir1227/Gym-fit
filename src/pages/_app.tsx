import Footer from "components/Footer/Footer";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/globalStyle";
import Header from "../components/Header/Header";
import Router from "next/router";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "components/Loading/Loading";

Router.events.on("routeChangeError", (err, url) => {
  console.error("Route change error: ", err, url);
  Router.push("/404");
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={repositoryName}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </PrismicPreview>
      </PrismicProvider>
      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=gymfit"
      ></script>
    </>
  );
}
