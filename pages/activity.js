import React from "react";
import styled from "styled-components";
import List from "../components/List";

export default function Activity() {
  return (
    <>
      <Heading>
        <Title>Activity</Title>
      </Heading>
      <List />
    </>
  );
}

const Heading = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 13px;

  position: absolute;
  width: 92px;
  height: 28px;
  left: calc(50% - 92px / 2 + 0.5px);
  top: 107px;
`;

const Title = styled.h1`
  /* Activity */

  width: 92px;
  height: 28px;

  /* Heading/6/Bold */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  display: flex;
  align-items: center;

  /* Black */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
