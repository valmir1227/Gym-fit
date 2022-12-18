import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100%;
  padding: 0 7rem;
  div {
    text-align: center;
    margin-bottom: 2rem;

    p {
      color: #616797;
    }
  }

  @media ${device.mobileS} {
    padding: 0 1rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.laptop} {
  }
`;

export const Cards = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  justify-content: center;
  gap: 1rem;
`;
