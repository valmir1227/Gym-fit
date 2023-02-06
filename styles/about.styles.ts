import styled from "styled-components";
import { device } from "./devices";
import aboutBgImg from "../src/assets/about-bg-img.png";
import aboutImg3 from "../src/assets/about-img-3.png";

export const Container = styled.section`
  width: 100%;
  color: #000;

  .courses-container {
    background: #fff;
  }
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

export const Main = styled.main`
  display: flex;
  justify-content: space-between;

  .image-container {
    width: 33.3rem;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  @media ${device.mobileS} {
    padding: 1rem;
    flex-direction: column;
    align-items: center;

    .image-container {
      width: 100%;
      height: 100%;
    }
  }

  @media ${device.mobileL} {
    padding: 3rem;
  }

  @media ${device.tablet} {
    padding: 3rem;

    .image-container {
      width: 50%;
      height: 50%;
    }
  }

  @media ${device.laptop} {
    padding: 3rem 7rem;
    flex-direction: row;
    .image-container {
      width: 45%;
      height: 50%;
    }
  }

  @media ${device.laptopL} {
    padding: 6rem 7rem;
  }
`;

export const Text = styled.div`
  width: 50%;
  h2 {
    width: fit-content;
    position: relative;
    font-size: 2.4rem;
    color: #322b40;
    margin-bottom: 3rem;
    span {
      color: #9258f9;
    }
    &::after {
      content: "";
      width: 70%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background: rgb(151, 87, 246);
      background: linear-gradient(
        120deg,
        rgba(151, 87, 246, 0.8) 20%,
        rgba(221, 89, 190, 0.6) 46%,
        rgba(232, 120, 156, 0) 100%
      );
    }
  }
  p {
    color: #616783;
    line-height: 1.6rem;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  button {
    margin-top: 2rem;
  }

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    padding: 3rem;
  }

  @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.laptopL} {
    padding: 6rem 7rem;
  }
`;

export const Section = styled.section`
  width: 100vw;
  display: flex;
  padding: 3rem 7rem 0;
  background: linear-gradient(
      280deg,
      rgba(232, 120, 155, 0.8) 0%,
      rgba(147, 88, 248, 0.8) 100%
    ),
    url(${aboutImg3.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .text {
    width: 50%;

    h2 {
      width: fit-content;
      position: relative;
      font-size: 2.4rem;
      color: #fff;
      margin-bottom: 2rem;
      span {
        color: #9258f9;
      }
      &::after {
        content: "";
        width: 70%;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 4px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
    p {
      color: #fff;
      line-height: 1.6rem;
      margin-top: 1rem;
      font-size: 0.9rem;
    }
  }

  .choose-us-img {
    width: 40%;
    height: 100%;
    align-self: flex-end;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      position: relative;
      bottom: -6px;
    }
  }
  @media ${device.mobileS} {
    flex-direction: column;
    height: auto;

    padding: 3rem 1rem 0;
    .text {
      width: 100%;
    }

    .choose-us-img {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 3rem 3rem 0;
    .text {
      width: 50%;
    }

    .choose-us-img {
      width: 50%;
    }
  }

  @media ${device.laptop} {
    padding: 3rem 7rem 0;
  }
`;

export const Clients = styled.section`
  color: #fff;
  .text {
    p {
      text-align: center;
      font-size: 0.9rem;
      color: #616783;
    }
  }
`;
