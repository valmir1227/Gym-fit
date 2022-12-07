import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import GlobalButton from "../Button/Button";
import { Container } from "./styles";

import { AiOutlineAlignLeft } from "react-icons/ai";

export default function MenuMobile() {
  return (
    <Container>
      <Image src={Logo} alt="" />
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
        <GlobalButton variant="primary" 
        href="/about" text="Get in Toutch" />
      </nav>
        <AiOutlineAlignLeft />
    </Container>
  );
}
