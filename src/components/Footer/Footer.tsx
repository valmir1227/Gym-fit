import Link from "next/link";
import Title from "components/Title/Title";
import Image from "next/image";
import { Contact, Container, Form, Logo, NavContainer, SciContainer } from "./styles";
import { MdEmail, MdPhone } from "react-icons/md";
import PaperPlane from "../../assets/paper-plane.png";
import FooterLogo from "../../assets/footer-logo.png";

import FacebookImg from "../../assets/facebook.png";
import InstagramImg from "../../assets/instagram.png";
import GithubImg from "../../assets/github.png";


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
      <hr />
      <SciContainer>
        <p>&copy; 2022 ValmirAlmeidaDev</p>
        <div>
          <Link href="">
            <Image src={InstagramImg} alt="" />
          </Link>
          <Link href="">
            <Image src={FacebookImg} alt="" />
          </Link>
          <Link href="">
            <Image src={GithubImg} alt="" />
          </Link>
        </div>
      </SciContainer>
    </Container>
  );
}
