import Card from "components/BlogCard/Card";
import Title from "components/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import { Cards, Container, Text } from "./styles";

export default function Blog() {
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
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Cards>
    </Container>
  );
}
