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
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { dateFormatter } from "utils/dateFormater";
import Title from "components/Title/Title";

export const Container = styled.section`
  width: 100%;
  color: #616783;

  .divider {
    width: 100%;
    height: 4px;
    margin-top: 1.5rem;
    background: #9757f6;
    background: radial-gradient(
      circle,
      #9757f6cc 10%,
      #dd59be99 66%,
      rgba(232, 120, 156, 0) 100%
    );
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
      color: #9258f9;
    }
  }
`;

export const Post = styled.main`
  width: 70vw;

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
    margin: 1rem 0;
  }

  @media ${device.mobileS} {
    width: 100%;
    padding: 1rem 1rem 0;
  }

  @media ${device.tablet} {
    padding: 3rem 3rem;
    width: 100vw;
  }

  @media ${device.laptop} {
    padding: 3rem;
  }
`;

export const PostImg = styled.div`
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }

  @media ${device.mobileS} {
    height: 200px;
  }

  @media ${device.mobileL} {
    height: 300px;
  }
  @media ${device.tablet} {
    height: 500px;
  }
`;

export const Content = styled.section`
  display: flex;
  width: 100vw;

  section {
    height: fit-content;
    position: sticky;
    top: 0;
  }
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const LtsArticles = styled.main`
  width: 95%;
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
    color: #616783;
  }

  &:hover {
    box-shadow: 0px 0px 18px -1px rgba(151, 87, 246, 0.6);

    h1 {
      color: #9258f9;
      transition: all 0.6s;
    }
  }
`;

const Article = ({ article, latestArticles }) => {
  return (
    <Container>
      <Head>
        <title>{article.uid}</title>
      </Head>
      <Header>
        <h1>BLOG DETAILS</h1>
        <Link href="/">Home</Link>
      </Header>
      <Content>
        <Post>
          <PostImg>
            <Image
              src={article.data?.image.url}
              width={1000}
              height={1000}
              alt=""
            />
          </PostImg>
          <span>
            <AiFillCalendar color="#D471B0" />
            {dateFormatter.format(article.data.firstPublicationDate)}
          </span>
          <SliceZone slices={article.data.slices} components={components} />
          <div className="divider"></div>
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

  const [article, latestArticles] = await Promise.all([
    client.getByUID("article", params.uid),
    client.getAllByType("article", {
      limit: 5,
      orderings: [
        { field: "my.article.publishDate", direction: "desc" },
        { field: "document.first_publication_date", direction: "desc" },
      ],
    }),
  ]);

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
