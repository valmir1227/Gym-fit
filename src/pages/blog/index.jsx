import { PrismicText } from "@prismicio/react";
import styled from "styled-components";
import { createClient } from "../../../prismicio";

const Container = styled.section`
  width: 100%;
  height: 300vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export default function Blog({ articles }) {
  console.log(articles);
  return (
    <Container>
      <div>
        {articles.map((article) => (
          <>
            <span key={article.id}>{article.data.publishDate}</span>
            <h1>
              <PrismicText field={article.data.title} />
            </h1>
            <img width={300} src={article.data.featuredImage.url} alt="" />
          </>
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      articles,
    },
  };
}
