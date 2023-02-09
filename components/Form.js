import React, { useState } from "react";
import styled from "styled-components";

import uuid from "react-uuid";

export default function BillForm({ addBill, bill }) {
  const [title, setTitle] = useState(bill ? bill.title : "");
  const [amount, setAmount] = useState(bill ? bill.amount : "");
  const [participants, setParticipants] = useState(
    bill
      ? bill.participants
      : [
          {
            name: "",
            id: uuid(),
            paid: "",
          },
        ]
  );
  const [results, setResults] = useState([]);

  function handleAddParticipant(event) {
    event.preventDefault();
    setParticipants([
      ...participants,
      {
        name: "",
        id: uuid(),
        paid: "",
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
        paid: participant.paid,
        balance: balance > 0 ? ` owes ${balance} $` : ` is owed ${-balance} $`,
      };
    });

    setResults(newBalance);
    const newBill = { title, amount, participants: newBalance };
    addBill(newBill);
  }

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <label aria-label='input to add participants' htmlFor='title'>
          Title
          <input
            type='text'
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            name='title'
            id='title'
            pattern='^\s*[a-zA-Z,\s]+\s*$'
            maxLength={20}
            minLength={2}
            required
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
            pattern='/^[1-9]+$/'
            max='1000000'
            min='1'
            required
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
                pattern='^\s*[a-zA-Z,\s]+\s*$'
                maxLength={20}
                minLength={2}
                onChange={(event) => handleParticipantChange(event, index)}
                required
              />
            </label>
            <label htmlFor={index}>
              Paid:
              <input
                type='number'
                id={index}
                placeholder='00.00'
                name='paid'
                pattern='/^[1-9]+$/'
                max='1000000'
                min='1'
                value={participant.paid}
                onChange={(event) => handleParticipantChange(event, index)}
                required
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
      {/* {results.length > 0 && (
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
      )} */}
    </>
  );
}
const Button = styled.button`
  align-items: center;
  display: flex;
  margin: auto;
  margin-top: 2em;
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
