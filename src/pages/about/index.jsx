import GlobalButton from "components/Button/Button";
import Title from "components/Title/Title";
import Courses from "container/Courses/Courses";
import Explore from "container/Explore/Explore";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components";
import { device } from "../../../styles/devices";
import aboutBgImg from "../../assets/about-bg-img.png";
import aboutImg1 from "../../assets/about-img-1.png";
import aboutImg2 from "../../assets/about-img-2.png";
import aboutImg3 from "../../assets/about-img-3.png";
import Testimonials from "components/Testimonials/Testimonials";

export const Container = styled.section`
  width: 100%;
  color: #000;
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${aboutBgImg.src});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 5.4rem;
    background: rgb(151, 87, 246);
    background: linear-gradient(
      180deg,
      rgba(151, 87, 246, 1) 0%,
      rgba(221, 89, 190, 1) 76%,
      rgba(232, 120, 156, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    ::-webkit-text-fill-color {
      -webkit-text-fill-color: transparent;
    }
  }
  a {
    color: #fff;
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      color: #9258f9;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;

  .image-container {
    width: 33.3rem;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  @media ${device.mobileS} {
    padding: 1rem;
    flex-direction: column;
    align-items: center;

    .image-container {
      width: 100%;
      height: 100%;
    }
  }

  @media ${device.mobileL} {
    padding: 3rem;
  }

  @media ${device.tablet} {
    padding: 3rem;

    .image-container {
      width: 50%;
      height: 50%;
    }
  }

  @media ${device.laptop} {
    padding: 3rem 7rem;
    flex-direction: row;
    .image-container {
      width: 45%;
      height: 50%;
    }
  }

  @media ${device.laptopL} {
    padding: 6rem 7rem;
  }
`;

export const Text = styled.div`
  width: 50%;
  h2 {
    width: fit-content;
    position: relative;
    font-size: 2.4rem;
    color: #322b40;
    margin-bottom: 3rem;
    span {
      color: #9258f9;
    }
    &::after {
      content: "";
      width: 70%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 4px;
      background: rgb(151, 87, 246);
      background: linear-gradient(
        120deg,
        rgba(151, 87, 246, 0.8) 20%,
        rgba(221, 89, 190, 0.6) 46%,
        rgba(232, 120, 156, 0) 100%
      );
    }
  }
  p {
    color: #616783;
    line-height: 1.6rem;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  button {
    margin-top: 2rem;
  }

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    padding: 3rem;
  }

  @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.laptopL} {
    padding: 6rem 7rem;
  }
`;

export const Section = styled.section`
  width: 100vw;
  display: flex;
  padding: 3rem 7rem 0;
  background: linear-gradient(
      280deg,
      rgba(232, 120, 155, 0.8) 0%,
      rgba(147, 88, 248, 0.8) 100%
    ),
    url(${aboutImg3.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .text {
    width: 50%;

    h2 {
      width: fit-content;
      position: relative;
      font-size: 2.4rem;
      color: #fff;
      margin-bottom: 2rem;
      span {
        color: #9258f9;
      }
      &::after {
        content: "";
        width: 70%;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 4px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
    p {
      color: #fff;
      line-height: 1.6rem;
      margin-top: 1rem;
      font-size: 0.9rem;
    }
  }

  .choose-us-img {
    width: 40%;
    height: 90%;
    align-self: flex-end;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: relative;
      bottom: -6px;
    }
  }
  @media ${device.mobileS} {
    flex-direction: column;
    height: auto;

    padding: 3rem 1rem 0;
    .text {
      width: 100%;
    }

    .choose-us-img {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 3rem 3rem 0;
    .text {
      width: 50%;
    }

    .choose-us-img {
      width: 50%;
    }
  }

  @media ${device.laptop} {
    padding: 3rem 7rem 0;
  }
`;

export const Clients = styled.section`
  color: #fff;
  .text {
    p {
      text-align: center;
      font-size: 0.9rem;
      color: #616783;
    }
  }
`;
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
            delay: 2500,
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
