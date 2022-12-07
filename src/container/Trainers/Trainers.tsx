import React from "react";
import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

export default function Trainers() {
  return (
    <Container>
      <div>
        <Title textPrimary="Our" textSecondary="Traienrs" />
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis,
          <br />
          mollis vehicula sapien.
        </p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <Cards>
          <SwiperSlide>
            <Card
              name="Jhon Doe"
              role="Cardio Expert"
              facebook="valmir.almeida.5454"
              instagram="valmiralmeidadev"
              tiktok="/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              name="Jhon Doe"
              role="Cardio Expert"
              facebook="valmir.almeida.5454"
              instagram="valmiralmeidadev"
              tiktok="/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              name="Jhon Doe"
              role="Cardio Expert"
              facebook="valmir.almeida.5454"
              instagram="valmiralmeidadev"
              tiktok="/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              name="Jhon Doe"
              role="Cardio Expert"
              facebook="valmir.almeida.5454"
              instagram="valmiralmeidadev"
              tiktok="/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              name="Jhon Doe"
              role="Cardio Expert"
              facebook="valmir.almeida.5454"
              instagram="valmiralmeidadev"
              tiktok="/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              name="Jhon Doe"
              role="Cardio Expert"
              facebook="valmir.almeida.5454"
              instagram="valmiralmeidadev"
              tiktok="/"
            />
          </SwiperSlide>
        </Cards>
      </Swiper>
    </Container>
  );
}
