import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

export default function BillForm({ onSubmit, bill, isEditPage }) {
  const [title, setTitle] = useState(bill ? bill.title : "");
  const [amount, setAmount] = useState(bill ? bill.amount : "");
  const [participants, setParticipants] = useState(
    bill
      ? bill.participants
      : [
          {
            name: "",
            id: uuidv4(),
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
        id: uuidv4(),
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
        balance:
          balance > 0
            ? ` owes ${balance} $`
            : ` is owed ${(-balance).toFixed(2)} $`,
      };
    });

    setResults(newBalance);
    const newBill = { title, amount, participants: newBalance };
    onSubmit(newBill);
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <Label aria-label='input to add participants' htmlFor='title'>
          Title
        </Label>
        <Input
          default
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
      </InputWrapper>
      <InputWrapper>
        <Label aria-label='amount' htmlFor='amount'>
          Amount
        </Label>
        <Input
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
      </InputWrapper>

      <Label>
        Participants{" "}
        <AddButton type='button' onClick={handleAddParticipant}>
          ADD +
        </AddButton>
      </Label>

      {participants.map((participant, index) => (
        <ListItem key={index}>
          <InputWrapper>
            <Label htmlFor={index}></Label>
            <Input
              type='text'
              default
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
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor={index}></Label>
            <Input
              type='number'
              id={index}
              placeholder='00.00'
              name='paid'
              pattern='/^[0-9]+$/'
              max='1000000'
              min='0'
              value={participant.paid}
              onChange={(event) => handleParticipantChange(event, index)}
              required
            />
          </InputWrapper>
          <DeleteButton
            type='button'
            onClick={() => handleDeleteParticipant(participant.id)}
          >
            X
          </DeleteButton>
        </ListItem>
      ))}

      <Button type='submit'>{isEditPage ? "Save Changes" : "Save Bill"}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  gap: 1rem;
`;

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  width: ${(props) => (props.default ? "100%" : "6.5rem")};
  height: 3rem;
  font-size: var(--fs-caption);
  border-radius: 1em;
  border: 1px solid var(--clr-accent);
  padding: 1em 0.7em;
  &:focus {
    border: 1.1px solid var(--clr-accent);
  }
`;

const Label = styled.h3`
  font-size: var(--fs-label);
  color: var(--clr-accent);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AddButton = styled.button`
  border-radius: 1.5em;
  padding: 0.5em 1em;
  background-color: var(--clr-primary);
  border: 2px solid var(--clr-accent);
  text-align: center;
  font-size: var(--fs-label);
  color: var(--clr-accent);
  font-weight: 600;
  height: 2.1rem;

  &:hover {
    background-color: rgba(56, 71, 189, 0.1);
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const DeleteButton = styled.button`
  border-radius: 50%;
  color: var(--clr-accent);
  font-weight: 600;
  border: 2px solid var(--clr-accent);
  padding: 0.2em;
  background-color: var(--clr-primary);
  position: fixed;
  right: 1.5rem;
`;
