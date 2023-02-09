import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { createClient } from "../../../prismicio";
import { useEffect, useState } from "react";

import {
  Articles,
  Container,
  Content,
  Header,
  ImageContainer,
  Pagination,
  Post,
} from "../../../styles/blog.styles";
import { dateFormatter } from "utils/dateFormater";
import { AiFillClockCircle, AiOutlineRight } from "react-icons/ai";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesToDisplay, setArticlesToDisplay] = useState([]);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  useEffect(() => {
    setArticlesToDisplay(
      articles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
      )
    );
  }, [currentPage, articles]);

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
        {articlesToDisplay.map((article) => (
          <Post key={article.id}>
            <ImageContainer>
              <PrismicLink document={article}>
                <Image
                  src={article.data?.image.url}
                  alt={article.data.image?.alt}
                  width={500}
                  height={500}
                />
              </PrismicLink>
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

              <PrismicLink document={article}>
                Read More <AiOutlineRight />
              </PrismicLink>
            </Content>
          </Post>
        ))}
      </Articles>
      <Pagination>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        {currentPage > 1 && currentPage < totalPages && (
          <span>{currentPage}</span>
        )}

        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </Pagination>
    </Container>
  );
}

export async function getStaticProps({ previewData, params }) {
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
    revalidate: 3600,
  };
}
