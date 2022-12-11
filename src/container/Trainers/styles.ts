import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 7rem ;
  div {
    text-align: center;
    margin-bottom: 3rem;

    p {
      color: #616797;
    }
  }

  @media ${device.mobileS} {
    padding: 0 1rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem ;
  }

  @media ${device.laptop} {
    margin-bottom: 12rem;
  }


`;

export const Cards = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;
`;
