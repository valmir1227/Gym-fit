import Courses from "container/Courses/Courses";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import courseBg from "../../assets/course-bg-img.png";

export const Container = styled.section`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${courseBg.src});

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
