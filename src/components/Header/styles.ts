import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Head = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    gap: 2rem;

    .active {
      color: #9258f9;
    }

    li {
      color: #fff;
      text-transform: uppercase;
      font-size: 0.9rem;
      transition: color 0.3s;

      &:hover {
        color: #9258f9;
      }
    }
  }

  @media ${device.mobileS} {
    padding: 1rem;
  }

  @media ${device.tablet} {
    padding: 1rem 3rem;
  }

  @media ${device.laptop} {
    padding: 1rem 4rem;
  }
`;
