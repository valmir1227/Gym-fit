import Head from "next/head";
import Link from "next/link";
import Timetable from "container/Timetable/Timetable";
import { Container, Header } from "../../../styles/schedule.styles";

export default function index() {
  return (
    <Container>
      <Head>
        <title>GYMFIT | SCHEDULE </title>
      </Head>
      <Header>
        <h1>SCHEDULE</h1>
        <Link href="/">Home</Link>
      </Header>
      <Timetable />
    </Container>
  );
}
