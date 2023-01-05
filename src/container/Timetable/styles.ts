import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 0 7rem;
  background: #F8F8F9;

  @media ${device.mobileS} {
    padding: 1rem;
  }

  @media ${device.tablet} {
    padding: 1rem 3rem;
  }

  @media ${device.laptop} {
    padding: 1rem 7rem;
  }

`;

export const Text = styled.div`
  text-align: center;
  color: #616797;
`;

export const CardConTainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  


  display: flex;
  flex-wrap: wrap;
`;
