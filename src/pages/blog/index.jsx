import Head from "next/head";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { dateFormatter } from "utils/dateFormater";
import { PrismicRichText } from "@prismicio/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

import styled from "styled-components";
const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Blog({ articles, posts }) {
  const date = prismicH.asDate(
    posts?.data?.publishDate || posts.first_publication_date
  );
  console.log(articles[1].data.text[0].text);

  return (
    <Container>
      <Head>
        <title>GYMFIT | BLOG </title>
      </Head>
      <div>
        {articles.map((article) => (
          <>
            <span key={article.slug}>{dateFormatter.format(date)}</span>
            <h1>
              <PrismicRichText field={article.data.title} />
            </h1>
            {article.data.text.map((text) => (
              <p key={article.data}>{text.text}</p>
            ))}
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

  const posts = articles.map((article) => ({
    slug: article.uid,
    title: article.data.title,
  }));

  return {
    props: {
      posts,
      articles,
    },
  };
}
