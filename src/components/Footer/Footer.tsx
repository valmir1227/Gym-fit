import Link from "next/link";
import Title from "components/Title/Title";
import Image from "next/image";
import {
  Contact,
  Container,
  Form,
  Logo,
  NavContainer,
  SciContainer,
} from "./styles";
import { MdEmail, MdPhone } from "react-icons/md";
import PaperPlane from "../../assets/paper-plane.png";
import FooterLogo from "../../assets/footer-logo.png";

import FacebookLogo from "../../assets/facebook.png";
import InstagramLogo from "../../assets/instagram.png";
import GithubLogo from "../../assets/github.png";

export default function Footer() {
  return (
    <Container>
      <Form>
        <Title textPrimary="SUBSCRIBE TO " textSecondary="OUR NEWSLETTER" />
        <div>
          <input type="email" placeholder="Your Email..." />
          <div>
            <Link href="/contact">
              <Image src={PaperPlane} alt="" />
            </Link>
          </div>
        </div>
        <p>Get latest updates for latest courses</p>
      </Form>
      <Logo>
        <Image src={FooterLogo} alt="" />
      </Logo>

      <NavContainer>
        <p>
          <hr />
        </p>
        <nav>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>

          <Link href="/courses">
            <li>Courses</li>
          </Link>
          <Link href="/schedule">
            <li>Schedule</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </nav>
        <p>
          <hr />
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
      <hr />
      <SciContainer>
        <p>&copy; 2022 ValmirAlmeidaDev</p>
        <div>
          <Link
            href="https://www.instagram.com/valmiralmeidadev/"
            target="_blank"
          >
            <Image src={InstagramLogo} alt="" />
          </Link>
          <Link
            href="https://www.facebook.com/valmir.almeida.5454/"
            target="_blank"
          >
            <Image src={FacebookLogo} alt="" />
          </Link>
          <Link href="https://github.com/valmir1227" target="_blank">
            <Image src={GithubLogo} alt="" />
          </Link>
        </div>
      </SciContainer>
    </Container>
  );
}
