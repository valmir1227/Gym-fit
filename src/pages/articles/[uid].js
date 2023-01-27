import Head from "next/head";
import { createClient } from "@prismicio/client";

export default function Articles({ article }) {
  console.log(article);

  return <div>{article.data.title}</div>;
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  // const latestArticles = await client.getAllByType("article", {
  //   limit: 3,
  //   orderings: [
  //     { field: "my.article.publishDate", direction: "desc" },
  //     { field: "document.first_publication_date", direction: "desc" },
  //   ],
  //});

  console.log(article);
  return {
    props: {
      article,
      //  latestArticles,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
