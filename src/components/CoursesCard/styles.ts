import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.div`
  width: 25%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  background: #fff;

  &:hover {
    background: rgb(232, 120, 155);
    background: linear-gradient(
      180deg,
      rgba(232, 120, 155, 1) 36%,
      rgba(147, 88, 248, 1) 100%
    );

    h2 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 33%;
  }

  @media ${device.laptop} {
    width: 25%;
  }
`;

export const Text = styled.div`
  text-align: center;
  h2 {
    color: #322b40;
  }

  p {
    margin: 1rem 1rem 0;
  }
`;
