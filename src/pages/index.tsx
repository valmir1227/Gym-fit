import Head from "next/head";
import About from "../container/About/About";
import Courses from "../container/Courses/Courses";
import Home from "../container/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>GYMFIT | HOME</title>
      </Head>
      <Home />
      <About />
      <Courses />
    </>
  );
}
