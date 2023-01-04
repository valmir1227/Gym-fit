import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import GlobalButton from "../Button/Button";
import { Head, Mobile } from "./styles";

import { useEffect, useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [winSize, setWinSize] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setWinSize(window.innerWidth);
  }, []);

  return (
    <div>
      {winSize > 768 ? (
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
            <GlobalButton
              variant="primary"
              href="/about"
              text="Get in Toutch"
            />
          </nav>
        </Head>
      ) : (
        <Mobile>
          <Image src={Logo} alt="" />
          <div>
            {toggleMenu && (
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
                <GlobalButton
                  variant="primary"
                  href="/about"
                  text="Get in Toutch"
                />
              </nav>
            )}

            {toggleMenu ? (
              <AiOutlineClose
                size="30px"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            ) : (
              <AiOutlineAlignLeft
                size="30px"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            )}
          </div>
        </Mobile>
      )}
    </div>
  );
}
