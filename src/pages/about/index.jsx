import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import GlobalButton from "components/Button/Button";
import Title from "components/Title/Title";
import Courses from "container/Courses/Courses";
import Testimonials from "components/Testimonials/Testimonials";
import Explore from "container/Explore/Explore";
import "swiper/css";
import "swiper/css/pagination";
import {
  Clients,
  Container,
  Header,
  Main,
  Section,
  Text,
} from "../../../styles/about.styles";

import aboutImg1 from "../../assets/about-img-1.png";
import aboutImg2 from "../../assets/about-img-2.png";

export default function About() {
  return (
    <Container>
      <Head>
        <title>GYMFIT | ABOUT </title>
      </Head>
      <Header>
        <h1>ABOUT US</h1>
        <Link href="/">Home</Link>
      </Header>
      <Main>
        <div className="image-container">
          <Image src={aboutImg1} alt="" width={400} height={400} />
        </div>

        <Text>
          <h2>
            ABOUT <span>GYMFIT</span>
          </h2>
          <p>
            Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper
            ex non leo blandit porta. Duis purus sapien, blandit non sem quis,
            mollis vehicula sapien. Fusce mollis mauris vitae enim varius
            scelerisque id id ex. Maecenas vel iaculis purus, a ornare quam.
          </p>
          <p>
            Sed a mi mattis, posuere mauris et, mollis lacus. Vivamus in
            imperdiet libero, at dapibus eros. In varius lacinia gravida. Aenean
            dignissim nulla nibh, a laoreet ligula fermentum sit amet.
          </p>

          <GlobalButton variant="primary" href="/" text="Read More" />
        </Text>
      </Main>

      <Section>
        <div className="text">
          <h2>WHY CHOOSE US</h2>
          <p>
            Suspendisse consectetur congue orci, eu cursus ante ultrices sit
            amet. Morbi egestas purus ut purus scelerisque, vel iaculis neque
            molestie. Pellentesque rhoncus felis sed enim finibus pulvinar. GYM
          </p>
          <p>
            Suspendisse consectetur congue orci, eu cursus ante ultrices sit
            amet. Morbi egestas purus ut purus scelerisque, vel iaculis neque
            molestie. Pellentesque rhoncus felis sed enim finibus pulvinar. GYM
          </p>
          <p>
            Suspendisse consectetur congue orci, eu cursus ante ultrices sit
            amet. Morbi egestas purus ut purus scelerisque, vel iaculis neque
            molestie. Pellentesque rhoncus felis sed enim finibus pulvinar. GYM
          </p>
        </div>

        <div className="choose-us-img">
          <Image src={aboutImg2} alt="" width={600} height={500} />
        </div>
      </Section>

      <Clients>
        <div className="text">
          <Title textPrimary="What " textSecondary="Client's Say" />
          <p>
            Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
            blandit non sem quis,
            <br /> mollis vehicula sapien.
          </p>
        </div>
        <Swiper
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>

          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>

          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>

          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
        </Swiper>

        <Explore />
        <Courses />
      </Clients>
    </Container>
  );
}
