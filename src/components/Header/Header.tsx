import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import GlobalButton from "../Button/Button";
import { Head } from "./styles";

import { useEffect, useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

export default function Header() {
  const [winSize, setWinSize] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(toggleMenu);

  useEffect(() => {
    setWinSize(window.innerWidth);
  }, []);

  const Mobile = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    position: absolute;

    div {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      nav {
        list-style: none;
        background: rgba(146, 88, 249, 0.38);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(146, 88, 249, 1);
        text-align: center;
        padding: 2rem 1rem;
        margin-top: 0.5rem;
        border-radius: 5px;
        z-index: 99;

        li {
          padding: 0.5rem 0;
          text-transform: uppercase;
          font-weight: 500;
          color: #fff;
        }
      }
      svg {
        cursor: pointer;
      }
    }
  `;
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
