import Title from "../../components/Title/Title";
import TimeTableCard from "../../components/TimetableCard/Card";
import { CardConTainer, Container, Text } from "./styles";

export default function Timetable() {
  return (
    <Container>
      <Text>
        <Title textPrimary="Our" textSecondary="Timetable" />
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis, <br />
          mollis vehicula sapien.
        </p>
      </Text>

      <CardConTainer>
        <TimeTableCard />
        <TimeTableCard />
        <TimeTableCard />
        <TimeTableCard />
        <TimeTableCard />
        <TimeTableCard />
        <TimeTableCard />
        <TimeTableCard />
      </CardConTainer>
    </Container>
  );
}
