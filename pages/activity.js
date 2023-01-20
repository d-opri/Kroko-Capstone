import React from "react";
import styled from "styled-components";
import List from "../components/List";

export default function Activity() {
  return (
    <>
      <Title>Activity</Title>

      <List />
    </>
  );
}

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  padding-top: 50px;
`;
