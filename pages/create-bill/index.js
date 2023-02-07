import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import uuid from "react-uuid";
import BillDetails from "@/components/BillDetails";

export default function BillForm({ addBill }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [participants, setParticipants] = useState([
    {
      name: "",
      id: uuid(),
      paid: 0,
    },
  ]);
  const [results, setResults] = useState([]);

  function handleAddParticipant(event) {
    event.preventDefault();
    setParticipants([
      ...participants,
      {
        name: "",
        id: uuid(),
        paid: 0,
      },
    ]);
  }

  function handleDeleteParticipant(id) {
    setParticipants(
      participants.filter((participant) => participant.id !== id)
    );
  }

  function handleParticipantChange(event, index) {
    const newParticipants = [...participants];
    newParticipants[index][event.target.name] = event.target.value;
    setParticipants(newParticipants);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fairShare = Number(amount / participants.length).toFixed(2);
    const newBalance = participants.map((participant) => {
      const balance = Number(fairShare - participant.paid).toFixed(2);
      return {
        name: participant.name,
        balance: balance > 0 ? ` owes ${balance} $` : ` is owed ${-balance} $`,
      };
    });
    setResults(newBalance);
    const newBill = { title, amount, participants: newBalance };
    addBill(newBill);
  }

  return (
    <>
      <StyledLink href='/'>X</StyledLink>
      <Title>Create New Bill</Title>

      <Container onSubmit={handleSubmit}>
        <label aria-label='input to add participants' htmlFor='title'>
          Title
          <input
            type='text'
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            name='title'
            id='title'
          />
        </label>

        <label aria-label='amount' htmlFor='amount'>
          Amount
          <input
            type='number'
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
            name='amount'
            placeholder='00.00'
            id='amount'
          />
        </label>
        <button type='button' onClick={handleAddParticipant}>
          Add a participant
        </button>

        {participants.map((participant, index) => (
          <li key={index}>
            <label htmlFor={index}>
              <input
                type='text'
                placeholder='Add Name'
                id={index}
                name='name'
                value={participant.name}
                onChange={(event) => handleParticipantChange(event, index)}
              />
            </label>
            <label htmlFor={index}>
              Paid:
              <input
                type='number'
                id={index}
                name='paid'
                value={participant.paid}
                onChange={(event) => handleParticipantChange(event, index)}
              />
            </label>
            <button
              type='button'
              onClick={() => handleDeleteParticipant(participant.id)}
            >
              X
            </button>
          </li>
        ))}

        <button type='submit'>Calculate Split</button>
      </Container>
      {results.length > 0 && (
        <>
          <BillDetails title={title} total={amount}>
            {results.map((participant, index) => (
              <div key={index}>
                {participant.name}
                {participant.balance}
              </div>
            ))}
            <Link href={"/"}>
              <Button type='button'>Back to Dashboard</Button>
            </Link>
          </BillDetails>
        </>
      )}
    </>
  );
}
const Button = styled.button`
  align-items: center;
  display: flex;
  margin: auto;
  margin-top: 2em;
`;

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
