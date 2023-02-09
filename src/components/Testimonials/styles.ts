import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  margin: 3rem 0 6rem;
  gap: 10px;

  .card-container {
    width: 33rem;
    border-radius: 5px;
    padding: 2rem 1rem;
    background: #fff;
    text-align: center;
    font-size: 0.9rem;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 18px -1px rgba(151, 87, 246, 0.6);
  }

  .card-text {
    color: #616783;
    h3 {
      color: #9258f9;
    }
  }

  .card-picture {
    width: 4rem;
    height: 4rem;
    margin: 1.5rem auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;