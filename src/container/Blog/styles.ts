import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100vw;
  height: auto;

  .swiper-wrapper {
    padding-bottom: 1rem;
  }

  @media ${device.mobileS} {
    padding: 1rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem 7em;
  }

  @media ${device.laptop} {
    padding: 0 6rem 6rem;
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
`;
