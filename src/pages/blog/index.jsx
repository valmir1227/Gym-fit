import Head from "next/head";
import { createClient } from "../../../prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { Articles, Container, Content, Header, Image, Post } from "./styles";
import Link from "next/link";
import { AiFillClockCircle } from "react-icons/ai";

export default function Blog({ articles }) {
  console.log(articles[0].data);
  return (
    <Container>
      <Head>
        <title>GYMFIT | BLOG </title>
      </Head>
      <Header>
        <h1>BLOG</h1>
        <Link href="/">Home</Link>
      </Header>
      <Articles>
        {articles.map((article) => (
          <Post key={article}>
            <Image>
              <img src={article.data.image.url} alt="" />
            </Image>
            <Content>
              <span>
                <AiFillClockCircle color="#D471B0" />
                {article.data.publishdate}
              </span>
              <h3>
                <PrismicRichText field={article.data.title} />
              </h3>
              {article.data.text.map((text) => (
                <p key={article.data}>{text.text}</p>
              ))}
              <Link href="/">READ MORE</Link>
            </Content>
          </Post>
        ))}
      </Articles>
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
