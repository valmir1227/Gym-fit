import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Card = styled.div`
  width: 25%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 0.5rem;
    padding: 0.3rem 0.7rem;
    background: #7e55d0;
    box-shadow: rgb(126, 85, 208, 0.6) 0px 4px 8px 0px;
    border-radius: 30px;
    font-size: 0.9rem;
  }
  h3 {
    margin-top: 1rem;
    font-weight: 500;
    color: #616797;
  }

  span {
    color: #616797;
  }

  @media ${device.mobileS} {
    width: 50%;
  }

  @media ${device.mobileM} {
    width: 33%;
  }

  @media ${device.tablet} {
    width: 25%;
  }
`;
