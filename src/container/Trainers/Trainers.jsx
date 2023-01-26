import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";

export default function Trainers({ trainers }) {
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {trainers.map((trainer) => (
            <SwiperSlide key={trainer.id}>
              <Card
                role={trainer.data.role[0].text}
                name={trainer.data.name[0].text}
                image={trainer.data.profile.url}
                instagram={trainer.data.instagram.url}
                tiktok={trainer.data.tiktok.url}
                facebook={trainer.data.fcebook.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Cards>
    </Container>
  );
}
