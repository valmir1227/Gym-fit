import Card from "components/BlogCard/Card";
import Title from "components/Title/Title";
import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: auto;
  padding: 7rem;
`;
export const Text = styled.div`
  text-align: center;
  color: #616783;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
`;

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
