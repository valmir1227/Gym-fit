import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

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
          slidesPerView={"auto"}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
