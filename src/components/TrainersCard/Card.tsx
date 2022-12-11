import Image from "next/image";
import Link from "next/link";
import facebookImg from "../../../public/images/facebook.png";
import instagramImg from "../../../public/images/instagram.png";
import tikTokImg from "../../../public/images/tik-tok.png";
import trainer2 from "../../../public/images/trainer2.png";
import { Container, Profile, SocialMedia, Text } from "./styles";

interface CardProps {
  name: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  role: string;
  image: string;
}

export default function Card({
  name,
  instagram,
  facebook,
  tiktok,
  role,
  image,
}: CardProps) {
  return (
    <Container>
      <Text>
        <h3>{name}</h3>
        <span>{role}</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          sapiente...
        </p>
        <SocialMedia>
          <Link href={`https://instagram.com/${instagram}`} target="_blank">
            <Image src={instagramImg} alt="logo instagram " />
          </Link>

          <Link href={`https://facebook.com/${facebook}`} target="_blank">
            <Image src={facebookImg} alt="logo facebook" />
          </Link>

          <Link href={`https://tiktok.com/${tiktok}`} target="_blank">
            <Image src={tikTokImg} alt="logo tiktok" />
          </Link>
        </SocialMedia>
      </Text>

      <Profile>
        <div>
          <Image src={trainer2} alt="asa" />
        </div>
        <h4>{name}</h4>
      </Profile>
    </Container>
  );
}
