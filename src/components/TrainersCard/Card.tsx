import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import tikTok from "../../../public/images/tik-tok.png";
import trainer1 from "../../../public/images/trainer1.png";
import { device } from "../../../styles/devices";

export const Container = styled.div`
  width: 33%;
  height: 27rem;
  border-radius: 10px;
  background-color: #000;
  transition: all 0.3s ease;

  h3 {
  }

  &:hover > div {
    visibility: visible;
    width: 100%;
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
  }

  @media ${device.mobileS} {
    width: 100%;
  }
`;

export const Text = styled.div`
  width: 100%;
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

export default function Card() {
  return (
    <Container>
      <Text>
        <h3>Ruth Edwards</h3>
        <span>Cardio Experts</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          sapiente...
        </p>
        <SocialMedia>
          <Link href="/">
            <Image src={instagram} alt="" />
          </Link>

          <Link href="/">
            <Image src={facebook} alt="" />
          </Link>

          <Link href="/">
            <Image src={tikTok} alt="" />
          </Link>
        </SocialMedia>
      </Text>

      <h3>Ruth Edwards</h3>
    </Container>
  );
}
