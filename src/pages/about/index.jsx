import Title from "components/Title/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import aboutBgImg from "../../assets/about-bg-img.png";
import aboutImg1 from "../../assets/about-img-1.png";

export const Container = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${aboutBgImg.src});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 5.4rem;
    background: rgb(151, 87, 246);
    background: linear-gradient(
      180deg,
      rgba(151, 87, 246, 1) 0%,
      rgba(221, 89, 190, 1) 76%,
      rgba(232, 120, 156, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ::-webkit-text-fill-color {
      -webkit-text-fill-color: transparent;
    }
  }
  a {
    color: #fff;
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      color: #9258f9;
    }
  }
`;
export default function About() {
  return (
    <Container>
      <Head>
        <title>GYMFIT | ABOUT </title>
      </Head>
      <Header>
        <h1>ABOUT US</h1>
        <Link href="/">Home</Link>
      </Header>
      <main>
        <div>
          <Image src={aboutImg1} alt="" width={400} height={400} />
        </div>

        <div>
          <Title textPrimary="About" textSecondary="Gymfit" />
          <p>
            Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper
            ex non leo blandit porta. Duis purus sapien, blandit non sem quis,
            mollis vehicula sapien. Fusce mollis mauris vitae enim varius
            scelerisque id id ex. Maecenas vel iaculis purus, a ornare quam. Sed
            a mi mattis, posuere mauris et, mollis lacus. Vivamus in imperdiet
            libero, at dapibus eros. In varius lacinia gravida. Aenean dignissim
            nulla nibh, a laoreet ligula fermentum sit amet.
          </p>
        </div>
      </main>
    </Container>
  );
}
