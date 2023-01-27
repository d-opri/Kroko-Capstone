import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import AddParticipants from "../components/AddParticipants";
import Button from "@/components/Button";

export default function Form({ toCalculate }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [participants, setParticipants] = useState([]);

  const validateInput = ({ title, amount }) => {
    if (!title.trim()) {
      return window.alert("Enter a Title");
    }
    if (title.length > 50) {
      return window.alert("Maximum of 50 characters");
    }
    if (!amount.trim()) {
      return window.alert("Enter an Amount");
    }
    return true;
  };

  function handleSubmit(event) {
    event.preventDefault();

    const validation = validateInput({ title, amount });

    if (!validation) {
      return null;
    }
    toCalculate({ participants, amount, paidBy });
  }

  return (
    <>
      <StyledLink href='/'>X</StyledLink>
      <Title>Create New Bill</Title>

      <Container onSubmit={handleSubmit}>
        <label aria-label='input to add participants' htmlFor='title'>
          Title
        </label>

        <input
          type='text'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          name='title'
          pattern='^[a-zA-Z0-9öÖäÄüÜ][a-zA-Z0-9_. ß]{1,}'
          maxLength='15'
          minLength='2'
          id='title'
        />
        <label aria-label='amount' htmlFor='amount'>
          Amount
        </label>
        <input
          type='text'
          onChange={(event) => setAmount(event.target.value)}
          value={amount}
          minLength='2'
          name='amount'
          placeholder='00.00'
          id='amount'
        />
        <AddParticipants />
        <Button type='submit' onClick={handleSubmit}>
          Calculate
        </Button>
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
