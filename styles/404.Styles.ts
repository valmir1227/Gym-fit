import styled from "styled-components";
import errorImg from "../src/assets/error-img.jpg";

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
  position: absolute;
  top: 0;
  z-index: 99;

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
