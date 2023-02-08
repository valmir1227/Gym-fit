import GlobalButton from "../../components/Button/Button";
import Container from "./styles";

export default function Home() {
  return (
    <Container>
      <div>
        <h1>SHAPE YOUR PERFECT BODY</h1>
        <p>
          Nullam posuere at massa id faucibus. Duis in lacus fermentum, volutpat
          tellus ut, faucibus nulla. Maecenas dictum neque velit, vitae porta
          arcu vehicula venenatis. Donec purus metus
        </p>
        <GlobalButton variant="secondary" href="/about" text="Read More" />
      </div>
    </Container>
  );
}
