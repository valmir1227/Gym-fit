import Head from "next/head";
import { createClient } from "../../prismicio";
import Blog from "container/Blog/Blog";
import About from "../container/About/About";
import Courses from "../container/Courses/Courses";
import Explore from "../container/Explore/Explore";
import Home from "../container/Home/Home";
import Timetable from "../container/Timetable/Timetable";
import Trainers from "../container/Trainers/Trainers";

export default function Index({ trainers, articles }) {
  return (
    <>
      <Head>
        <title>GYMFIT | HOME</title>
      </Head>
      <Home />
      <About />
      <Courses />
      <Trainers trainers={trainers} />
      <Timetable />
      <Explore />
      <Blog articles={articles} />
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const trainers = await client.getAllByType("trainers");
  const articles = await client.getAllByType("article", {
    limit: 5,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      articles,
      trainers,
    },
  };
}
