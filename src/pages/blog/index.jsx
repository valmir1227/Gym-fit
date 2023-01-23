import Head from "next/head";
import { createClient } from "../../../prismicio";
import { PrismicRichText } from "@prismicio/react";
import {
  Articles,
  Container,
  Content,
  Header,
  ImageContainer,
  Post,
} from "./styles";
import Link from "next/link";
import { AiFillClockCircle } from "react-icons/ai";

import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import Image from "next/image";

export default function Blog({ articles }) {




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
            <ImageContainer>
              <Image
                src={article.data.image.url}
                alt={article.data.image?.alt}
                width={500}
                height={500}
              />
            </ImageContainer>
            <Content>
              <span>
                <AiFillClockCircle color="#D471B0" />
                {article.data.publishdate}
              </span>
              <h3>
                <PrismicRichText field={article.data.title} />
              </h3>
              <p>{article.data.excerpt[0].text}</p>
              {
                //<SliceZone slices={article.data.slices} components={components} />
              }

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
