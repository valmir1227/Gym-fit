import Image from "next/image";
import { AboutContainer, ImageContainer, Text } from "./styles";
import GlobalButton from "../../components/Button/Button";
import aboutImg from "../../../public/images/about-img.png";

export default function About() {
  return (
    <AboutContainer>
      <Text>
        <h1>
          ABOUT <span>GYMFIT</span>
        </h1>
        <p>
          Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex
          non leo blandit porta. Duis purus sapien, blandit non sem quis, mollis
          vehicula sapien. Fusce mollis mauris vitae enim varius scelerisque id
          id ex. Maecenas vel iaculis purus, a ornare quam.
        </p>
        <p>
          Sed a mi mattis, posuere mauris et, mollis lacus. Vivamus in imperdiet
          libero, at dapibus eros. In varius lacinia gravida. Aenean dignissim
          nulla nibh, a laoreet ligula fermentum sit amet.
        </p>
        <GlobalButton variant="primary" href="/" text="Read More" />
      </Text>
      <ImageContainer>
        <Image src={aboutImg} alt="" />
      </ImageContainer>
    </AboutContainer>
  );
}
