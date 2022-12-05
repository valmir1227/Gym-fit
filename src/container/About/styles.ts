import styled from "styled-components";
import { device } from "../../../styles/devices";

export const AboutContainer = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media ${device.mobileS} {
    padding: 1rem;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.laptop} {
    padding: 3rem 1rem;
    flex-wrap: nowrap;
  }

  @media ${device.laptopL} {
    padding: 6rem 12rem;
  }
`;

export const Text = styled.div`
  h1 {
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
  }

  button {
    margin-top: 2rem;
  }

  @media ${device.mobileS} {
    padding: 1rem 0;
    width: 100%;
  }

  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.laptopL} {
    width: 40rem;
  }
`;

export const ImageContainer = styled.div`
  width: 27rem;
  height: 27rem;

  margin-left: 3.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${device.mobileS} {
    width: 20rem;
    height: 20rem;
    margin: 0;
  }

  @media ${device.mobileM} {
    width: 27rem;
    height: 27rem;
  }

  @media ${device.tablet} {
    width: 45rem;
    height: 45rem;
  }

  @media ${device.laptop} {
    width: 22rem;
    height: 22rem;
    margin-left: 4rem;
  }

  @media ${device.laptopL} {
    width: 35rem;
    height: 35rem;
  }
`;
