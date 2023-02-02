import React from "react";
import styled from "styled-components";
import List from "../components/List";
import listItems from "../db";
import Link from "next/link";

export default function Activity() {
  return (
    <>
      <Title>Activity</Title>
      <StyledLink href='./create-bill'>Create New Bill</StyledLink>
      <List items={listItems} />
    </>
  );
}

const StyledLink = styled(Link)`
  background-color: white;
  border-radius: 3em;
  border: 2px solid black;
  padding: 0.7em;

  width: 10em;
  color: black;
  display: flex;
  justify-content: center;
  margin: auto;
  font-weight: 700;
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  padding-block: 3rem;
`;
