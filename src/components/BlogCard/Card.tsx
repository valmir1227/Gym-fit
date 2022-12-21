import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

import Blog1 from "../../assets/blog-img-1.png";
import { Container, Text } from "./styles";

export default function Card() {
  return (
    <Container>
      <div>
        <Image src={Blog1} alt="" />
      </div>

      <Text>
        <span>Jan 10, 2018 by Admin</span>
        <h3>Best Cardio Excercise</h3>
        <p>
          Curabitur sit amet enim sagittis, blandit dolor quis, efficitur est.
          Morbi vitae quam ac erat tincidunt aliquet. Nullam posuere at massa id
          faucibus.{" "}
        </p>
        <Link href="" passHref legacyBehavior>
          <a>
            Read More
            <MdKeyboardArrowRight size="25px" />
          </a>
        </Link>
      </Text>
    </Container>
  );
}
