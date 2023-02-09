import Head from "next/head";
import Link from "next/link";

import Courses from "container/Courses/Courses";
import { Container, Header } from "../../../styles/courses.styles";

export default function index() {
  return (
    <Container>
      <Head>
        <title>GYMFIT | COURSES </title>
      </Head>
      <Header>
        <h1>TRAINERS</h1>
        <Link href="/">Home</Link>
      </Header>
      <Courses />
    </Container>
  );
}
