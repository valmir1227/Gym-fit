import styled from "styled-components";
import FooterBg from "../../assets/footer-bg.png";

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background: url(${FooterBg.src});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7rem;

  hr {
    width: 100%;
    height: 1px;
    margin: 2rem 0 1rem;
  }
`;

export const Form = styled.div`
  width: 50rem;
  height: 20rem;
  margin-top: -50px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 8px 3px rgba(228, 118, 160, 0.5);
  border-radius: 5px;

  div {
    width: 15rem;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 30px;
    position: relative;
    box-shadow: 0px 2px 6px 1px rgba(228, 118, 160, 0.7);

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
      background: #e476a0;
      background: linear-gradient(
        200deg,
        rgba(228, 118, 160, 1) 0%,
        #9a5bef 100%
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
  padding: 2rem 7rem;
  p {
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 50px;

    a {
      display: flex;
      align-items: center;
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
