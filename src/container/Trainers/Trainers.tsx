import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

interface Text {
  text: string;
}

interface URL {
  url: string;
}

interface TrainerData {
  name: Text[];
  role: Text[];
  profile: URL;
  instagram: URL;
  tiktok: URL;
  fcebook: URL;
  description: Text[];
}

interface Trainer {
  id: string;
  data: TrainerData;
}

interface TrainersProps {
  trainers: Trainer[];
}

interface TrainersProps {
  trainers: Trainer[];
}

export default function Trainers({ trainers }: TrainersProps) {
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
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {trainers.map((trainer) => (
            <SwiperSlide key={trainer.id}>
              <Card
                role={trainer.data?.role[0].text}
                name={trainer.data?.name[0].text}
                image={trainer.data?.profile.url}
                instagram={trainer.data?.instagram.url}
                tiktok={trainer.data?.tiktok.url}
                facebook={trainer.data?.fcebook.url}
                description={trainer.data?.description[0].text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Cards>
    </Container>
  );
}
