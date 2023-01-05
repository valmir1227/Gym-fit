import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import { useEffect, useState } from "react";

export default function Trainers() {
  const [winSize, setWinSize] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);

  useEffect(() => {
    setWinSize(window.innerWidth);
    if (winSize <= 500) {
      setSlidesPerView(1.5);
    } else if (winSize <= 768) setSlidesPerView(2.5);
    else {
      setSlidesPerView(3);
    }
  }, [winSize]);

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
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
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
