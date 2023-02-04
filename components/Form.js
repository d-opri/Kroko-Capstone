import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link.js";
import uuid from "react-uuid";

export default function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [participants, setParticipants] = useState([
    {
      name: "",
      id: uuid(),
      paid: 0,
    },
  ]);

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

  function handleParticipantChange(event, id) {
    const newParticipants = [...participants];
    newParticipants.forEach((participant) => {
      if (participant.id === id) {
        participant[event.target.name] = event.target.value;
      }
    });
    setParticipants(newParticipants);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      title,
      amount,
      participants,
    };
    const data = Object.fromEntries(Object.entries(formData));

    onSubmit(data);
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

        {participants.map((participant) => (
          <li key={participant.id}>
            <label htmlFor={participant.id}>
              <input
                type='text'
                placeholder='Add Name'
                id={participant.id}
                name='name'
                value={participant.name}
                onChange={(event) =>
                  handleParticipantChange(event, participant.id)
                }
              />
            </label>
            <label htmlFor={participant.id}>
              Paid:
              <input
                type='number'
                id={participant.id}
                name='paid'
                value={participant.paid}
                onChange={(event) =>
                  handleParticipantChange(event, participant.id)
                }
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
        <button type='submit'>Add Bill</button>
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
