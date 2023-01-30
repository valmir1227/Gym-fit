import styled from "styled-components";
import { device } from "../../../styles/devices";
import BlogBg from "../../assets/blog-bg-img.png";

export const Container = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${BlogBg.src});
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

export const Articles = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.3rem;
  margin-top: 3rem;

  @media ${device.mobileS} {
    padding: 1rem 1rem 7rem;
    justify-content: center;
  }

  @media ${device.tablet} {
    padding: 0 3rem 7em;
    justify-content: center;
  }

  @media ${device.laptop} {
    padding: 0 7rem 7rem;
    justify-content: flex-start;
  }
`;

export const Post = styled.div`
  width: 400px;
  padding-bottom: 1rem;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  &:hover {
    img {
      filter: grayscale(1);
    }

    h3 a {
      color: #d84dc7;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 300px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    transition: filter 0.3s;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #616783;
  }

  h3 a {
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 1rem;
    color: #0a0a0a;
    transition: color 0.3s;
  }

  p {
    margin: 0.5rem 0;
    color: #616783;
  }

  a {
    text-transform: uppercase;
    color: #d84dc7;
    transition: 0.3s;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
