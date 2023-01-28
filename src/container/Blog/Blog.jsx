import Card from "components/BlogCard/Card";
import Title from "components/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import { Cards, Container, Text } from "./styles";
import { dateFormatter } from "utils/dateFormater";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

export default function Blog({ articles }) {
  console.log(articles[0].data);
  const getExcertp = (text) => {
    if (!text) return "";
    let finalExcerpt = text.slice(0, 300);
    if (finalExcerpt.length < text.length) {
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
                content={getExcertp(article.data?.excerpt[0]?.text)}
                image={article.data?.image.url}
                publishDate={article.data.firstPublicationDate}
                title={<PrismicRichText field={article.data.title} />}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Cards>
    </Container>
  );
}
