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
  background-color: #F8F8F9;

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
