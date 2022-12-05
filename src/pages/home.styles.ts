import styled from "styled-components";
export const Main = styled.main`
  width: 100vw;
  height: 90vh;
  background-image: url(http://netizensstore.com/gymfit_theme/html/multipage_6/assets/img/main-page/header-bg-img.png);
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;

  div {
    width: 700px;
    height: auto;
    padding-right: 7rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-40%);
    text-align: left;

    h1 {
      font-size: 4.5rem;
      line-height: 5.4rem;
      word-break: break-all;
      background: rgb(151, 87, 246);

      background: linear-gradient(
        180deg,
        rgba(151, 87, 246, 1) 0%,
        rgba(221, 89, 190, 1) 76%,
        rgba(232, 120, 156, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: #fff;
      margin: 1rem 0;
      font-size: 0.9rem;
    }
  }
`;
