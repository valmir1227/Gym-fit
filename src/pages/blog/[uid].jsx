import Head from "next/head";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import styled from "styled-components";
import { device } from "../../../styles/devices";
import BlogDtailBg from "../../assets/blog-dtails.png";
import Link from "next/link";
import Image from "next/image";

export const Container = styled.section`
  width: 100%;
  color: #000;
  img {
    width: 300px;
    height: 300px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${BlogDtailBg.src});
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
    font-weight: 500;
    &:hover {
      color: #d84dc7;
    }
  }
`;

const Article = ({ article }) => {
  console.log(article);
  return (
    <Container>
      <Head>
        <title>{article.uid}</title>
      </Head>
      <Header>
        <h1>BLOG DETAIL</h1>
        <Link href="/">Home</Link>
      </Header>
      <main>
        <div className="postimage">
          <Image
            src={article.data?.image.url}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <span>{article.data.publishdate}</span>
        <SliceZone slices={article.data.slices} components={components} />
      </main>
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
