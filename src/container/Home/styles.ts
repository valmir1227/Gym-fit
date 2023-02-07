import styled from "styled-components";
import { device } from "../../../styles/devices";
import HeaderImage from "../../assets/header-bg-img.png";
import HeaderMobile from "../../assets/header-bg-mobile.png";

const Container = styled.section`
  width: 100vw;
  height: 90vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  div {
    width: 46.6rem;
    height: auto;
    position: absolute;

    top: 40%;
    transform: translateY(-40%);
    text-align: left;

    h1 {
      font-size: 4.5rem;
      line-height: 5.4rem;
      word-break: break-all;
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

    p {
      color: #fff;
      margin: 1rem 0;
    }
  }

  @media ${device.mobileS} {
    padding: 1rem;
    background-position: right;
    background-image: url(${HeaderMobile.src});

    div {
      padding: 1rem;
      width: 100%;

      h1 {
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }
  }

  @media ${device.tablet} {
    background-image: url(${HeaderImage.src});
    background-position: center;

    div {
      width: 40rem;
      padding: 0 3rem;
      left: 0;
    }
  }

  @media ${device.laptop} {
    padding: 3rem 6rem;
    div {
      width: 46.6rem;

      left: 40%;

      h1 {
        font-size: 4.5rem;
        line-height: 5.4rem;
      }
    }
  }

  @media ${device.laptopL} {
    padding: 6rem 12rem;

    div {
      left: 50%;
      width: 46.6rem;
    }
  }
`;

export default Container;
