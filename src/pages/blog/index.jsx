import Head from "next/head";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { dateFormatter } from "utils/dateFormater";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import BlogBg from "../../assets/blog-bg-img.png";
import NavLink from "components/NavLink/NavLink";
import Link from "next/link";
import Card from "components/BlogCard/Card";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;

  div {
    width: 100%;
    height: auto;
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60vh;
  background-image: url(${BlogBg.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 5.4rem;
    background: rgb(151, 87, 246);
    background: linear-gradient(
      180deg,
      rgba(151, 87, 246, 1) 0%,
      rgba(221, 89, 190, 1) 76%,
      rgba(232, 120, 156, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ::-webkit-text-fill-color {
      -webkit-text-fill-color: transparent;
    }
  }
  a {
    color: #fff;
    margin-top: 1rem;
    text-transform: uppercase;
  }
`;
export default function Blog({ articles, posts }) {
  const date = prismicH.asDate(
    posts?.data?.publishDate || posts.first_publication_date
  );

  return (
    <Container>
      <Head>
        <title>GYMFIT | BLOG </title>
      </Head>

      <Header>
        <h1>BLOG</h1>
        <Link href="/">Home</Link>
      </Header>

      <div>
        <Card/>
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
