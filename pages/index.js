import React from "react";
import styled from "styled-components";
import ListItem from "@/components/ListItem";
import Link from "next/link";
import useSWR from "swr";

export default function Activity() {
  const { data, error } = useSWR("/api/bills");

  if (error) return <h1>Girl you failed</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <Title>Activity</Title>
      <StyledLink href='./add-bill'>Add New Bill</StyledLink>
      <ul>
        {data.map((bill) => (
          <ListItem key={bill.id} bill={bill} />
        ))}
      </ul>
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
