import Image from "next/image";
import React from "react";
import styled from "styled-components";
import errorImg from "../assets/error-img.jpg";
import errorImg2 from "../assets/error-img-2.png";
import { Button } from "components/Button/styles";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${errorImg.src});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  div {
    width: 26.6rem;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    margin: 1rem;
    font-size: 2.4rem;
  }

  p {
    margin: 1rem;
    font-size: 1.2rem;
  }
`;

export default function Error404() {
  return (
    <Container>
      <div>
        <Image src={errorImg2} alt="" width={400} height={400} />
      </div>
      <h1>SORRY...PAGE NOT FOUND</h1>
      <p>THE PAGE YOU WERE LOOKING FOR COULD NOT BE FOUND</p>
      <Button variant="secondary">Go to HomePage</Button>
    </Container>
  );
}
