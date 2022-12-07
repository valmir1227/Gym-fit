import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: fit-content;
    position: relative;
    font-size: 2.4rem;
    margin: 3rem auto;
    color: #322b40;

    span {
      color: #9258f9;
    }

    &::after {
      content: "";
      width: 70%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 4px;
      background: #9757f6;
      background: radial-gradient(
        circle,
        #9757f6cc 10%,
        #dd59be99 66%,
        rgba(232, 120, 156, 0) 100%
      );
    }
  }

  p {
    text-align: center;
    color: #616783;
    margin: 2rem;
  }

  a {
    margin-top: 2rem;
  }

  @media ${device.mobileS} {
    padding: 1rem;
  }
`;

export const Cards = styled.div`
  gap: 1rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
