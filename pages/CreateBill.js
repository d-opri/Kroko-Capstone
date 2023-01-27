import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import AddParticipants from "../components/AddParticipants";

export default function Form() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTitle(event.target.value);
    setAmount(event.target.value);
  }

  return (
    <>
      <StyledLink href='/'>X</StyledLink>
      <Title>Create New Bill</Title>

      <Container onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          name='title'
          id='title'
        />
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          onChange={(event) => setAmount(event.target.value)}
          value={amount}
          name='amount'
          placeholder='00.00'
          id='amount'
        />
        <AddParticipants />
      </Container>
    </>
  );
}

const StyledLink = styled(Link)`
  color: black;
  font-size: large;
  display: flex;
  justify-content: end;
  margin: 2em;
  font-weight: 900;
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  padding-block: 5rem;
`;

const Container = styled.form`
  list-style: none;
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-left: 2em;
  margin-right: 2em;
`;
