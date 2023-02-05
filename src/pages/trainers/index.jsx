import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import teamBg from "../../assets/team-bg-img.png";
import Card from "components/TrainersCard/Card";
import { createClient } from "../../../prismicio";

export const Container = styled.section`
  width: 100%;

  main {
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 2rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${teamBg.src});
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

export default function index({ trainers }) {
  return (
    <Container>
      <Head>
        <title>GYMFIT | COURSES </title>
      </Head>
      <Header>
        <h1>TRAINERS</h1>
        <Link href="/">Home</Link>
      </Header>
      <main>
        {trainers.map((trainer) => (
          <Card
            key={trainer.id}
            role={trainer.data?.role[0].text}
            name={trainer.data.name[0].text}
            image={trainer.data.profile.url}
            instagram={trainer.data?.instagram?.url}
            tiktok={trainer.data?.tiktok?.url}
            facebook={trainer.data?.fcebook?.url}
            description={trainer.data?.description[0]?.text}
          />
        ))}
      </main>
    </Container>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const trainers = await client.getAllByType("trainers");
  return {
    props: {
      trainers,
    },
  };
}
