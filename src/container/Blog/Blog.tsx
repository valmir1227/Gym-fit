import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import Card from "components/BlogCard/Card";
import Title from "components/Title/Title";
import { Cards, Container, Text } from "./styles";

interface Article {
  id: string;
  data: {
    title: {
      text: string;
    }[];
    firstPublicationDate: string;
    image: {
      url: string;
    };
    excerpt: {
      text: string;
    }[];
  };
}

interface BlogProps {
  articles: Article[];
}

export default function Blog({ articles }: BlogProps) {
  const getExcerpt = (text: { excerpt: { text: string }[] }): string => {
    if (!text || !Array.isArray(text.excerpt) || !text.excerpt[0]?.text)
      return "";
    let finalExcerpt = text.excerpt[0].text.slice(0, 250);
    if (finalExcerpt.length < text.excerpt[0].text.length) {
      let lastSpace = finalExcerpt.lastIndexOf(" ");
      finalExcerpt = finalExcerpt.slice(0, lastSpace) + "...";
    }
    return finalExcerpt;
  };
  return (
    <Container>
      <Text>
        <Title textPrimary="Our" textSecondary="Blog" />
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis,
          <br />
          mollis vehicula sapien.
        </p>
      </Text>
      <Cards>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id} className="swiperArticle">
              <Card
                content={getExcerpt(article.data)}
                image={article.data?.image.url}
                publishDate={article.data.firstPublicationDate}
                title={article.data.title[0].text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Cards>
    </Container>
  );
}
