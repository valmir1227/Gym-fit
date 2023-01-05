import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
              slidesPerView: 2,
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
        </Swiper>
      </Cards>
    </Container>
  );
}
