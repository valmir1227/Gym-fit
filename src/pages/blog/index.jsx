import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
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
import { dateFormatter } from "utils/dateFormater";

export default function Blog({ articles }) {
  const getExcertp = (text) => {
    if (!text || !Array.isArray(text.excerpt) || !text.excerpt[0]?.text)
      return "";
    let finalExcerpt = text.excerpt[0].text.slice(0, 300);
    if (finalExcerpt.length < text.excerpt[0].text.length) {
      let lastSpace = finalExcerpt.lastIndexOf(" ");
      finalExcerpt = finalExcerpt.slice(0, lastSpace) + "...";
    }
    return finalExcerpt;
  };

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
          <Post key={article.id}>
            <ImageContainer>
              <Image
                src={article.data?.image.url}
                alt={article.data.image?.alt}
                width={500}
                height={500}
              />
            </ImageContainer>
            <Content>
              <span>
                <AiFillClockCircle color="#D471B0" />
                {dateFormatter.format(article.data.firstPublicationDate)}
              </span>
              <h3>
                <PrismicLink document={article}>
                  <PrismicRichText field={article.data.title} />
                </PrismicLink>
              </h3>
              <p>{getExcertp(article.data)}</p>

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
