import styled from "styled-components";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";
import { dateFormatter } from "utils/dateFormater";
import { PrismicRichText } from "@prismicio/react";

const Container = styled.section`
  width: 100%;
  height: 300vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export default function Blog({ articles }) {
  const date = prismicH.asDate(
    articles?.data?.publishDate || articles.first_publication_date
  );
  console.log(articles);

  return (
    <Container>
      <Head>
        <title>GYMFIT | BLOG</title>
      </Head>
      <div>
        {articles.map((article) => (
          <>
            <span key={article.id}>{dateFormatter.format(date)}</span>
            <h1>{prismicH.asText(article.data.title)}</h1>
            <p></p>
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
  console.log(articles);

  return {
    props: {
      articles,
    },
  };
}
