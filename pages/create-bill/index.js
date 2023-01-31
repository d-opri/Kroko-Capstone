import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import AddParticipants from "../../components/AddParticipants";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import uuid from "react-uuid";

export default function BillForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [participants, setParticipants] = useState([
    {
      name: "",
      id: uuid(),
      balance: 0,
    },
  ]);
  const [results, setResults] = useState([]);

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

  function handleAddParticipant(event) {
    event.preventDefault();

    const validation = validateInput({ participants });

    if (!validation) {
      return null;
    }
    setParticipants([
      ...participants,
      {
        name: "",
        id: uuid(),
        balance: 0,
      },
    ]);
  }
  function handleDeleteParticipant(id) {
    const newList = participants.filter((participant) => participant.id !== id);
    setParticipants(newList);
  }

  function handleCalculate(event) {
    event.preventDefault();

    const validation = validateInput({ title, amount });

    if (!validation) {
      return null;
    }
    const evenSplit = amount / participants.length;
    const newBalance = participants.map((participant) => {
      const balance = evenSplit - participant.balance;
      return {
        name: participant.name,
        id: participant.id,
        balance: balance > 0 ? `owes ${balance}` : `is owed §{-balance}`,
      };
    });
    setResults(newBalance);
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
        <AddParticipants value={paidBy} />
        <Button type='submit'>Calculate</Button>
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
