import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Container, Text } from "./styles";

export default function Card({ image, publishDate, title, content }) {
  return (
    <Container>
      <div>
        <Image src={image} alt="" width={500} height={500} />
      </div>

      <Text>
        <span>{publishDate}</span>
        <h3>{title}</h3>
        <p>{content}</p>
        <Link href="/blog" passHref legacyBehavior>
          <a>
            Read More
            <MdKeyboardArrowRight size="25px" />
          </a>
        </Link>
      </Text>
    </Container>
  );
}
