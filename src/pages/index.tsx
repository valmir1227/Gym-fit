import Head from "next/head";
import About from "../container/About/About";
import Courses from "../container/Courses/Courses";
import Home from "../container/Home/Home";
import Timetable from "../container/Timetable/Timetable";
import Trainers from "../container/Trainers/Trainers";

export default function Index() {
  return (
    <>
      <Head>
        <title>GYMFIT | HOME</title>
      </Head>
      <Home />
      <About />
      <Courses />
      <Trainers />
      <Timetable />
    </>
  );
}
