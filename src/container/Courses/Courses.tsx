import React from "react";
import Card from "../../components/CoursesCard/Card";
import { Cards, Container } from "./styles";
import kettlebells from "../../../public/images/kettlebells.png";
import courses3 from "../../../public/images/courses-img-3.png";
import courses4 from "../../../public/images/courses-img-4.png";
import courses5 from "../../../public/images/courses-img-5.png";
import courses6 from "../../../public/images/courses-img-6.png";

export default function Courses() {
  return (
    <Container>
      <div>
        <h1>
          OUR <span>COURSES</span>
        </h1>
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis, mollis vehicula sapien.
        </p>
      </div>
      <Cards>
        <Card
          image={kettlebells}
          text="Kettlebells Course"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta."
        />

        <Card
          image={courses5}
          text="WEIGHTLIFTING"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta."
        />

        <Card
          image={courses3}
          text="ADVANCED GYMNASTIC"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta."
        />

        <Card
          image={courses4}
          text="Meditation"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta."
        />

        <Card
          image={courses5}
          text="Martial Arts"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta."
        />

        <Card
          image={courses6}
          text="Running"
          title="Morbi commodo sapien at risus aliquam dapibus. Quisque ullamcorper ex non leo blandit porta."
        />
      </Cards>
    </Container>
  );
}
