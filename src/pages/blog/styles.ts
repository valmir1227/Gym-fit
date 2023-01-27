import styled from "styled-components";
import BlogBg from "../../assets/blog-bg-img.png";

export const Container = styled.section`
  width: 100%;
  height: 200vh;
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
  }
`;

export const Articles = styled.main`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 1000px;
  display: flex;
  gap: 10px;
`;

export const Post = styled.div`
  width: 400px;
  padding-bottom: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h3 a{
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 1rem;
    color: #000;
  }

  p {
    margin: 0.5rem 0;
    color: #616783;
  }
`;
