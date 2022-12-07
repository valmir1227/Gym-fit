import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { Container, Text } from "./styles";

interface CardProps {
  image: StaticImageData;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: CardProps) {
  return (
    <Container>
      <div>
        <Image src={image} alt="" />
      </div>
      <Text>
        <h2>{text}</h2>
        <p>{title}</p>
      </Text>
    </Container>
  );
}
