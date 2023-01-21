import React from "react";
import styled from "styled-components";
import List from "../components/List";
import listItems from "../db";

export default function Activity() {
  return (
    <>
      <Title>Activity</Title>

      <List items={listItems} />
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  padding: 20% 0 20% 0;
`;
