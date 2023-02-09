import Image, { StaticImageData } from "next/image";
import { Card } from "./styles";

interface TimeTableCardProps {
  image: StaticImageData;
  trainer: string;
  classroom: string;
  time: string;
}
export default function TimeTableCard({
  image,
  trainer,
  classroom,
  time,
}: TimeTableCardProps) {
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
