import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Bill({ title, total, participants, sharedSplit }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>Details</Subtitle>
      <Subtitle>Total</Subtitle>
      <Body>{total} </Body>
      <Subtitle>Participants</Subtitle>
      {participants
        .slice()
        .reverse()
        .map((item) => (
          <Body key={item.index}>
            {item.name} <span>{sharedSplit} </span>{" "}
          </Body>
        ))}
    </Container>
  );
}

const Container = styled.main``;

const Title = styled.h1`
  font-size: var(--fs-title);
`;

const Subtitle = styled.h2`
  font-size: var(--fs-subtitle);
`;
const Body = styled.p`
  font-size: var(--fs-caption);
`;

export default Bill;
