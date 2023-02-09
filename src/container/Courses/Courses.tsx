import Card from "../../components/CoursesCard/Card";
import GlobalButton from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import kettlebells from "../../assets/kettlebells.png";
import courses3 from "../../assets/courses-img-3.png";
import courses4 from "../../assets/courses-img-4.png";
import courses5 from "../../assets/courses-img-5.png";
import courses6 from "../../assets/courses-img-6.png";
import { Cards, Container } from "./styles";

export default function Courses() {
  return (
    <Container className="courses-container">
      <div>
        <Title textPrimary="Our" textSecondary="Courses" />
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis, <br /> mollis vehicula sapien.
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
      <GlobalButton href="/courses" text="View More" variant="primary" />
    </Container>
  );
}
