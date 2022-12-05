import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import GlobalButton from "../Button/Button";

import { Head } from "./styles";

export default function Header() {
  return (
    <Head>
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
        <GlobalButton variant="primary" href="/about" text="Get in Toutch" />
      </nav>
    </Head>
  );
}
