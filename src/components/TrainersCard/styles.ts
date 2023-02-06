import styled from "styled-components";

export const Container = styled.div`
  height: 30rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: sticky;
  z-index: 1;
  margin-left: 1rem;

  &:hover h4 {
    display: none;
  }

  &:hover > div {
    visibility: visible;
  }
`;

export const Text = styled.div`
  position: absolute;
  visibility: hidden;
  text-align: center;
  width: 24rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgb(232, 120, 155);
  background: linear-gradient(
    180deg,
    rgba(232, 120, 155, 0.7) 36%,
    rgba(147, 88, 248, 0.7) 100%
  );

  h3 {
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #e8789b;
    padding: 2px 20px;
    border-radius: 30px;
    background: #fff;
  }

  p {
    margin: 1rem;
    color: #fff !important;
  }
`;

export const SocialMedia = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 17px;
    height: 17px;
    filter: invert(1);

    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Profile = styled.div`
  position: relative;

  width: 24rem;
  height: 100%;
  z-index: -1;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  div {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    background: rgb(151, 87, 246);
    background: linear-gradient(
      90deg,
      rgba(151, 87, 246, 1) 0%,
      rgba(221, 89, 190, 1) 76%,
      rgba(232, 120, 156, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ::-webkit-text-fill-color {
      -webkit-text-fill-color: transparent;
    }
  }
`;
