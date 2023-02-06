import Head from "next/head";
import Link from "next/link";
import { createClient } from "../../../prismicio";
import Card from "components/TrainersCard/Card";
import { Container, Header } from "../../../styles/trainers.styles";

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
            image={trainer.data?.profile.url}
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
