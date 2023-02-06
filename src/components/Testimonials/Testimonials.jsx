import Image from "next/image";
import React from "react";
import styled from "styled-components";
import testimonials3 from "../../assets/testimonials-img-3.png";

export const Container = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  margin: 3rem 0 6rem;
  gap: 10px;

  .card-container {
    width: 33rem;
    border-radius: 5px;
    padding: 2rem 1rem;
    background: #fff;
    text-align: center;
    font-size: 0.9rem;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 18px -1px rgba(151, 87, 246, 0.6);
  }

  .card-text {
    color: #616783;
    h3 {
      color: #9258f9;
    }
  }

  .card-picture {
    width: 4rem;
    height: 4rem;
    margin: 1.5rem auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

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
