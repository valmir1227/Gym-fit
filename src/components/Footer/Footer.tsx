import Title from "components/Title/Title";
import Image from "next/image";
import styled from "styled-components";

import PaperPlane from "../../assets/paper-plane.png";
import FooterLogo from "../../assets/footer-logo.png";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";

export const Container = styled.footer`
  width: 100%;
  height: 40rem;
  background: #e476a0;
  background: linear-gradient(180deg, rgba(228, 118, 160, 1) 0%, #9a5bef 100%);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const Form = styled.div`
  width: 50rem;
  height: 20rem;
  background: #fff;
  position: absolute;
  left: 50%;
  top: -40px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 8px 3px rgba(228, 118, 160, 0.5);

  div {
    width: 15rem;
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 30px;
    position: relative;
    box-shadow: 0px 2px 6px 1px rgba(228, 118, 160, 0.7);

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: inherit;
      padding-left: 20px;
      outline: none;
      font-size: 0.9rem;
    }

    div {
      position: absolute;
      right: 0;
      width: 40px;
      height: 40px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background: #e476a0;
      background: linear-gradient(
        200deg,
        rgba(228, 118, 160, 1) 0%,
        #9a5bef 100%
      );
      position: relative;
      img {
        margin: auto;
      }
    }
  }
  p {
    color: #616783;
    margin: 2rem 0;
    font-weight: 500;
  }
`;

export const Logo = styled.div`
  margin-top: 2rem;
`;

export const NavContainer = styled.div`
  margin-top: 1rem;
  p {
    font-size: 0.6rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      font-size: 0.9rem;
      list-style: none;
      font-weight: 500;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

export const Contact = styled.div`
  text-align: center;
  padding: 2rem 7rem 4rem;
  p {
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 50px;

    a {
      display: flex;
      align-items: center;
      color: #fff;
    }

    svg {
      border: 1px solid #fff;
      border-radius: 100%;
      margin-right: 10px;
      padding: 5px;
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <Form>
        <Title textPrimary="SUBSCRIBE TO " textSecondary="OUR NEWSLETTER" />
        <div>
          <input type="email" placeholder="Your Email..." />
          <div>
            <Image src={PaperPlane} alt="" />
          </div>
        </div>
        <p>Get latest updates for latest courses</p>
      </Form>
      <Logo>
        <Image src={FooterLogo} alt="" />
      </Logo>

      <NavContainer>
        <p>
          ---------------------------------------------------------------------------------------------------------------
        </p>
        <nav>
          <Link href="/">
            <li className="active">Home</li>
          </Link>
          <Link href="/">
            <li>About us</li>
          </Link>

          <Link href="/">
            <li>Courses</li>
          </Link>
          <Link href="/">
            <li>Schedule</li>
          </Link>
          <Link href="/">
            <li>Blog</li>
          </Link>
          <Link href="/">
            <li>Pages</li>
          </Link>
        </nav>
        <p>
          ---------------------------------------------------------------------------------------------------------------
        </p>
      </NavContainer>

      <Contact>
        <p>
          Aliquam scelerisque mauris at quam sollicitudin, euismod posuere neque
          dapibus. Duis sed eleifend urna, vel viverra mi. Vestibulum aliquet
          mauris id urna laoreet, a convallis lectus viverra. Fusce finibus nec
          turpis at viverra. Ut eget ex in libero condimentum semper sit amet
          quis odio. Morbi ut elit ac lorem hendrerit tempus quis eu dui.
        </p>

        <div>
          <a href="tel:+5533991113641">
            <MdPhone color="#fff" size="30px" />
            (33) 9 9111-3641
          </a>
          <a href="mailto:almeidavalmir76@gmail.com?subject=GymFit">
            <MdEmail color="#fff" size="30px" />
            Fitness@yourdomain.com
          </a>
        </div>
      </Contact>
    </Container>
  );
}
