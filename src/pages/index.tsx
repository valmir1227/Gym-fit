import Head from "next/head";
import GlobalButton from "../components/Button/Button";
import HomeContainer from "./styles";
import About from "../container/About/About";
export default function Home() {
  return (
    <>
      <Head>
        <title>GYMFIT | HOME</title>
      </Head>
      <HomeContainer>
        <div>
          <h1>SHAPE YOUR PERFECT BODY</h1>
          <p>
            Nullam posuere at massa id faucibus. Duis in lacus fermentum,
            volutpat tellus ut, faucibus nulla. Maecenas dictum neque velit,
            vitae porta arcu vehicula venenatis. Donec purus metus
          </p>
          <GlobalButton variant="secondary" href="/" text="Read More" />
        </div>
      </HomeContainer>
      <About />
    </>
  );
}
