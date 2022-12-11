import React from "react";
import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <Cards>
            <SwiperSlide>
              <Card
                name="Jhon Doe"
                role="Cardio Expert"
                facebook="valmir.almeida.5454"
                instagram="valmiralmeidadev"
                tiktok="/"
                image=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                name="Jhon Doe"
                role="Cardio Expert"
                facebook="valmir.almeida.5454"
                instagram="valmiralmeidadev"
                tiktok="/"
                image=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                name="Jhon Doe"
                role="Cardio Expert"
                facebook="valmir.almeida.5454"
                instagram="valmiralmeidadev"
                tiktok="/"
                image=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                name="Jhon Doe"
                role="Cardio Expert"
                facebook="valmir.almeida.5454"
                instagram="valmiralmeidadev"
                tiktok="/"
                image=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                name="Jhon Doe"
                role="Cardio Expert"
                facebook="valmir.almeida.5454"
                instagram="valmiralmeidadev"
                tiktok="/"
                image=""
              />
            </SwiperSlide>
          </Cards>
        </Swiper>
      </>
    </Container>
  );
}
