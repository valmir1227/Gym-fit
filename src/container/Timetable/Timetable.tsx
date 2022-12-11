import Image from "next/image";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import TimeTableCard from "../../components/TimetableCard/Card";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 7rem;
`;

export const Text = styled.div`
  text-align: center;
  color: #616797;
`;

export const CardConTainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
`;

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
