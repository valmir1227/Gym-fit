import styled from "styled-components";

export const Container = styled.div`
  max-width: 22rem;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: rgba(230, 32, 194, 0.25) 0px 5px 14px,
    rgba(0, 0, 0, 0.22) 0px 1px 7px;

  &:hover {
    box-shadow: rgba(230, 32, 194, 0.45) 0px 7px 16px,
      rgba(0, 0, 0, 0.22) 0px 5px 7px;

    div img {
      filter: grayscale(1);
    }

    h3 {
      color: #d84dc7;
    }
  }

  div {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Text = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 0 1rem;

  span {
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    color: #616783;
  }

  h3 {
    font-weight: 500;
    letter-spacing: -0.5px;
    font-size: 1.2rem;
    color: #8e56fd;
    margin: 1rem 0;
  }

  p {
    font-size: 0.9rem;
    color: #616783;
  }

  a {
    margin: 1rem 0 2rem;
    color: #d84dc7;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
