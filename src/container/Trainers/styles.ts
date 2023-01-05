import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100%;
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
  padding: 0 7rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 1rem;
`;
