import Image from "next/image";
import yoga from "../../assets/yoga.png";
import { Card } from "./styles";

export default function TimeTableCard() {
  return (
    <Card>
      <div>
        <Image src={yoga} priority={true} alt="" />
      </div>
      <p>06AM-08AM</p>

      <h3>Weight Loss</h3>
      <span>Rachel Adam</span>
    </Card>
  );
}
