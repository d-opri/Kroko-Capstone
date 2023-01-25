import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import AddParticipants from "../components/AddParticipants";

function Form() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Calculating Split Next");
  }

  return (
    <>
      <Title>Create New Bill</Title>
      <StyledLink href='/Activity'>X</StyledLink>
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
        <button type='submit'>Calculate Bill</button>
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

export default Form;
