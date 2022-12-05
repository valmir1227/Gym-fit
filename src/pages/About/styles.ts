import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100vw;
  height: 80vh;
  padding: 6rem 7rem;
  color: black;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Text = styled.div`
  width: 50%;

  h1 {
    width: fit-content;
    position: relative;
    font-size: 2.4rem;
    color: #322b40;
    margin-bottom: 3rem;
    span {
      color: #9258f9;
    }
    &::after {
      content: "";
      width: 70%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background: rgb(151, 87, 246);
      background: linear-gradient(
        120deg,
        rgba(151, 87, 246, 0.8) 20%,
        rgba(221, 89, 190, 0.6) 46%,
        rgba(232, 120, 156, 0) 100%
      );
    }
  }
  p {
    color: #616783;
    line-height: 1.6rem;
    margin-top: 1rem;
  }

  button {
    margin-top: 2rem;
  }
`;

export const ImageContainer = styled.div`
  min-width: 27rem;
  min-height: 27rem;
  height: auto;
  margin-left: 3.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
