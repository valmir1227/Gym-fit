import Image from "next/image";
import styled from "styled-components";
import yoga from "../../../public/images/yoga.png";

export const Card = styled.div`
  width: 25%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 0.5rem;
    padding: 0.3rem 0.7rem;
    background: #7e55d0;
    box-shadow: rgb(126, 85, 208, 0.6) 0px 4px 8px 0px;
    border-radius: 30px;
    font-size: 0.9rem;
  }
  h3 {
    margin-top: 1rem;
    font-weight: 500;
    color: #616797;
  }

  span {
    color: #616797;
  }
`;
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
