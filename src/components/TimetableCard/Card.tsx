import Image from "next/image";
import styled from "styled-components";
import yoga from "../../../public/images/yoga.png";
import { Card } from "./styles";

export default function TimeTableCard() {
  return (
    <Card>
      <div>
        <Image src={yoga} alt="" />
      </div>
      <p>06AM-08AM</p>

      <h3>Weight Loss</h3>
      <span>Rachel Adam</span>
    </Card>
  );
}
