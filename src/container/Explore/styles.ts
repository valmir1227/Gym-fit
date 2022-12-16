import styled from "styled-components";
import img from "../../assets/video.svg";

export const Container = styled.section`
  background: linear-gradient(
      280deg,
      rgba(232, 120, 155, 0.8) 0%,
      rgba(147, 88, 248, 0.8) 100%
    ),
    url(${img?.src});

  width: 100vw;
  height: 20rem;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;

    h1 {
      font-size: 2.1rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    svg {
      cursor: pointer;
      margin: 1rem 0;
      color: #fff;
      background: rgba(230, 230, 230, 0.4);
      border-radius: 100%;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
        background: transparent;
      }
    }

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
`;
