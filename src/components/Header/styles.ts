import styled from "styled-components";

export const Head = styled.header`
  width: 100vw;
  padding: 2rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
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
`;
