import styled from "styled-components";
import FooterBg from "../../assets/footer-bg.png";
import { device } from "../../../styles/devices";

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background: rgb(232, 120, 155);
  background: linear-gradient(
    180deg,
    rgba(232, 120, 155, 1) 36%,
    rgba(147, 88, 248, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7rem;

  hr {
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  }
  @media ${device.mobileS} {
    padding: 0 1rem;
    margin-top: 4rem;
  }
  @media ${device.tablet} {
    padding: 0 3rem;
  }
  @media ${device.laptop} {
    padding: 0 7rem;
  }
`;

export const Form = styled.div`
  width: 50rem;
  margin-top: -50px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 18px -1px rgba(151, 87, 246, 0.6);
  border-radius: 5px;

  div {
    width: 15rem;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 30px;
    position: relative;
    box-shadow: 0px 0px 18px -1px rgba(151, 87, 246, 0.6);

    cursor: pointer;

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: inherit;
      padding-left: 20px;
      outline: none;
      font-size: 0.9rem;
    }

    div {
      position: absolute;
      right: 0;
      width: 40px;
      height: 40px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background: rgb(232, 120, 155);
      background: linear-gradient(
        -90deg,
        rgba(232, 120, 155, 1) 40%,
        rgba(147, 88, 248, 1) 100%
      );
      position: relative;
      img {
        margin: auto;
      }
    }
  }
  p {
    color: #616783;
    margin: 2rem 0;
    font-weight: 500;
  }

  @media ${device.mobileS} {
    padding: 0;
    width: 100%;

    h1 {
      font-size: 1.5rem;
    }
  }

  @media ${device.tablet} {
    width: 50rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Logo = styled.div`
  margin-top: 2rem;
`;

export const NavContainer = styled.div`
  margin-top: 1rem;
  p {
    font-size: 0.6rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    li {
      font-size: 0.9rem;
      list-style: none;
      font-weight: 500;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

export const Contact = styled.div`
  text-align: center;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 20px;

    a {
      display: flex;
      align-items: center;
      flex-wrap: w;
      color: #fff;
    }

    svg {
      border: 1px solid #fff;
      border-radius: 100%;
      margin-right: 10px;
      padding: 5px;
    }
  }
`;

export const SciContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    display: flex;
    gap: 2rem;

    img {
      width: 1rem;
      height: 1rem;
      filter: invert(1);

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
