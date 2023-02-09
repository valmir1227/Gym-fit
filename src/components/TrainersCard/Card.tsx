import Image from "next/image";
import Link from "next/link";
import facebookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import tikTokLogo from "../../assets/tik-tok.png";
import { Container, Profile, SocialMedia, Text } from "./styles";

interface CardProps {
  name: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  role: string;
  image: string;
  description: string;
}

export default function Card({
  name,
  instagram,
  facebook,
  tiktok,
  role,
  image,
  description,
}: CardProps) {
  return (
    <Container>
      <Text>
        <h3>{name}</h3>
        <span>{role}</span>
        <p>{description}</p>
        <SocialMedia>
          <Link href={instagram} target="_blank">
            <Image src={instagramLogo} alt="logo instagram " />
          </Link>

          <Link href={facebook} target="_blank">
            <Image src={facebookLogo} alt="logo facebook" />
          </Link>

          <Link href={tiktok} target="_blank">
            <Image src={tikTokLogo} alt="logo tiktok" />
          </Link>
        </SocialMedia>
      </Text>

      <Profile>
        <div>
          <Image src={image} alt="asa" width={360} height={450} />
        </div>
        <h4>{name}</h4>
      </Profile>
    </Container>
  );
}
