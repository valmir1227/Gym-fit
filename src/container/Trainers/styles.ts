import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100%;
  div {
    text-align: center;
    margin-bottom: 1rem;

    p {
      color: #616797;
    }
  }

  @media ${device.mobileS} {
    padding: 1rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.laptop} {
    padding: 0 6rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;
