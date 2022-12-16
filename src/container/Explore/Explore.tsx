import { Container } from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

export default function Explore() {
  return (
    <Container>
      <div>
        <h1>Explore GymFit</h1>
        <Link href="/" target="_blank">
          <AiFillPlayCircle size="100px" />
        </Link>

        <p>Watch Now</p>
      </div>
    </Container>
  );
}
