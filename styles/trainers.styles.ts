import styled from "styled-components";
import teamBg from "../src/assets/team-bg-img.png";
import { device } from "./devices";

export const Container = styled.section`
  width: 100vw;

  main {
    width: 100%;
    padding: 3rem 7rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media ${device.mobileS} {
      padding: 3rem 1rem;

      justify-content: center;
    }

    @media ${device.tablet} {
      padding: 3rem;
    }

    @media ${device.laptop} {
      padding: 3rem 7rem;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${teamBg.src});
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
