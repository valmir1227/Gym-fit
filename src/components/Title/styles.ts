import styled from "styled-components";

export const Text = styled.h1`
  width: fit-content;
  position: relative;
  font-size: 2.4rem;
  margin: 3rem auto 2rem;
  color: #322b40;
  text-transform: uppercase;
  text-align: center;

  span {
    color: #9258f9;
  }

  &::after {
    content: "";
    width: 70%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    background: #9757f6;
    background: radial-gradient(
      circle,
      #9757f6cc 10%,
      #dd59be99 66%,
      rgba(232, 120, 156, 0) 100%
    );
  }
`;
