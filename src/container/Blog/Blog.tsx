import Card from "components/BlogCard/Card";
import Title from "components/Title/Title";
import { Cards, Container, Text } from "./styles";

export default function Blog() {
  return (
    <Container>
      <Text>
        <Title textPrimary="Our" textSecondary="Blog" />
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis,
          <br />
          mollis vehicula sapien.
        </p>
      </Text>
      <Cards>
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  );
}
