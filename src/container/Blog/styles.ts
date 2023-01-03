import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100vw;
  height: auto;

  @media ${device.mobileS} {
    padding: 1rem 1rem 7rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem 7em;
  }

  @media ${device.laptop} {
    padding: 0 7rem 7rem;
  }
`;
export const Text = styled.div`
  text-align: center;
  color: #616783;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
`;
