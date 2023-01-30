import Head from "next/head";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import styled from "styled-components";
import { device } from "../../../styles/devices";
import BlogDtailBg from "../../assets/blog-dtails.png";
import Link from "next/link";
import Image from "next/image";
import { AiFillClockCircle } from "react-icons/ai";
import { dateFormatter } from "utils/dateFormater";
import Title from "components/Title/Title";

export const Container = styled.section`
  width: 100%;
  color: #000;
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
      color: #9258f9;
    }
  }
`;

export const Post = styled.main`
  width: 70%;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #616783;
    margin: 1.5rem 0;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #9258f9;
    margin: 1rem;
  }

  @media ${device.mobileS} {
    padding: 1rem 1rem 7rem;
  }

  @media ${device.tablet} {
    padding: 3rem 3rem 7em;
  }

  @media ${device.laptop} {
    padding: 3rem 7rem 7rem;
  }
`;

export const PostImg = styled.div`
  width: 800px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`;

export const Content = styled.section`
  display: flex;

  section {
    width: 100%;
  }
`;

export const LtsArticles = styled.main`
  width: 90%;
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.7s;
  text-transform: uppercase;

  img {
    border-radius: 3px;
  }

  a {
    color: #000;
  }

  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(252, 101, 252, 0.55);

    h1 {
      color: #9258f9;
      transition: all 0.6s;
    }
  }
`;

const Article = ({ article, latestArticles }) => {
  console.log(latestArticles);
  return (
    <Container>
      <Head>
        <title>{article.uid}</title>
      </Head>
      <Header>
        <h1>BLOG DETAIL</h1>
        <Link href="/">Home</Link>
      </Header>
      <Content>
        <Post>
          <PostImg>
            <Image
              src={article.data?.image.url}
              width={500}
              height={500}
              alt=""
            />
          </PostImg>
          <span>
            <AiFillClockCircle color="#D471B0" />
            {dateFormatter.format(article.data.firstPublicationDate)}
          </span>
          <SliceZone slices={article.data.slices} components={components} />
        </Post>
        <section>
          <Title textPrimary="Recent" textSecondary="Posts" />
          <main>
            {latestArticles.map((latestArticle) => (
              <LtsArticles key={latestArticle.id}>
                <Image
                  src={latestArticle.data?.image.url}
                  alt=""
                  width={180}
                  height={100}
                />
                <PrismicLink document={latestArticle}>
                  <PrismicRichText field={latestArticle.data.title} />
                </PrismicLink>
              </LtsArticles>
            ))}
          </main>
        </section>
      </Content>
    </Container>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      article,
      latestArticles,
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
