import Head from "next/head";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;

  img {
    width: 400px;
    height: 400px;
  }
`;

const Article = ({ article }) => {
  console.log(article.data);
  return (
    <Container>
      <h2>{article.data.publishdate
}</h2>
      <SliceZone slices={article.data.slices} components={components} />
    </Container>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  console.log(params.uid);
  const article = await client.getByUID("article", params.uid);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: true,
  };
}
