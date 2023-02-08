import Image from "next/image";
import yoga from "../../assets/yoga.png";
import { Card } from "./styles";

export default function TimeTableCard({ image, trainer, classroom, time }) {
  return (
    <Card>
      <div>
        <Image src={image} priority={true} alt="" />
      </div>
      <p>{time}</p>

      <h3>{classroom}</h3>
      <span>{trainer}</span>
    </Card>
  );
}
