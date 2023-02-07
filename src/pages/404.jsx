import Image from "next/image";
import { Button } from "components/Button/styles";
import Link from "next/link";
import errorImg2 from "../assets/error-img-2.png";
import { Container } from "../../styles/404.Styles";

export default function Error404() {
  return (
    <Container>
      <div>
        <Image src={errorImg2} alt="" width={400} height={400} />
      </div>
      <h1>SORRY...PAGE NOT FOUND</h1>
      <p>THE PAGE YOU WERE LOOKING FOR COULD NOT BE FOUND</p>
      <Link href="/">
        <Button variant="secondary">Go to HomePage</Button>
      </Link>
    </Container>
  );
}
