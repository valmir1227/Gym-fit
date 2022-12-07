import styled from "styled-components";

export const Container = styled.div`
  width: 20.3rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 1s;

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
