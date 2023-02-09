import Image from "next/image";
import React from "react";
import testimonials3 from "../../assets/testimonials-img-3.png";
import { Container } from "./styles";



export default function Testimonials() {
  return (
    <Container>
      <div className="card-container">
        <div className="card-text">
          <p>
            Quot Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos distinctio sit blanditiis similique possimus
            consequuntur ipsam fuga
          </p>

          <div className="card-picture">
            <Image src={testimonials3} alt="" width={400} height={400} />
          </div>
          <h3>Inessa Doe</h3>
          <p>Executive Chef</p>
        </div>
      </div>
    </Container>
  );
}
