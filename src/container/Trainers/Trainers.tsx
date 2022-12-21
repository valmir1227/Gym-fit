import React from "react";
import Title from "../../components/Title/Title";
import Card from "../../components/TrainersCard/Card";
import { Cards, Container } from "./styles";

export default function Trainers() {
  return (
    <Container>
      <div>
        <Title textPrimary="Our" textSecondary="Traienrs" />
        <p>
          Quisque ullamcorper ex non leo blandit porta. Duis purus sapien,
          blandit non sem quis,
          <br />
          mollis vehicula sapien.
        </p>
      </div>

      <Cards>
        <Card
          name="Jhon Doe"
          role="Cardio Expert"
          facebook="valmir.almeida.5454"
          instagram="valmiralmeidadev"
          tiktok="/"
          image=""
        />

        <Card
          name="Jhon Doe"
          role="Cardio Expert"
          facebook="valmir.almeida.5454"
          instagram="valmiralmeidadev"
          tiktok="/"
          image=""
        />

        <Card
          name="Jhon Doe"
          role="Cardio Expert"
          facebook="valmir.almeida.5454"
          instagram="valmiralmeidadev"
          tiktok="/"
          image=""
        />

        <Card
          name="Jhon Doe"
          role="Cardio Expert"
          facebook="valmir.almeida.5454"
          instagram="valmiralmeidadev"
          tiktok="/"
          image=""
        />

        <Card
          name="Jhon Doe"
          role="Cardio Expert"
          facebook="valmir.almeida.5454"
          instagram="valmiralmeidadev"
          tiktok="/"
          image=""
        />
      </Cards>
    </Container>
  );
}
