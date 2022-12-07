import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  position: absolute;
  z-index: 2;
  background: #ff00003a;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  nav {
    padding: 2rem;
    position: absolute;
    left: 0;
    list-style: none;
    background: black;

}

  svg {
    width: 2rem;
    height: 2rem;
    color: black;
    cursor: pointer;
    color: #fff;
  }
`;
