import styled, { css } from "styled-components";
interface ButtonProps {
  variant: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.6rem 1.3rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  background: rgb(151, 87, 246);
  background: linear-gradient(
    120deg,
    rgba(151, 87, 246, 1) 0%,
    rgba(221, 89, 190, 1) 46%,
    rgba(232, 120, 156, 1) 100%
  );

  ${(props) =>
    props.variant === "primary" &&
    css`
      &:hover {
        color: #9258f9;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      padding: 0.7rem 2.5rem;
      border: 1px solid transparent;
      transition: border 0.3s ease-in;
      &:hover {
        background: none;
        border: 1px solid #9258f9;
      }
    `}
`;
