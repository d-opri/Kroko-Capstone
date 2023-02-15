import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { StyledCaption, StyledLabel } from "@/components/Typography.js";
import Delete from "@/assets/close_circle.svg";

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
        <StyledLabel aria-label='title' htmlFor='title'>
          Title
        </StyledLabel>
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
        <StyledLabel aria-label='amount' htmlFor='amount'>
          Amount
        </StyledLabel>
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

      <AddButton type='button' onClick={handleAddParticipant}>
        ADD +
      </AddButton>
      <InputWrapper>
        <StyledLabel>Participants </StyledLabel>

        {participants.map((participant, index) => (
          <ListItem key={index}>
            <InputWrapper>
              <StyledLabel htmlFor={index}></StyledLabel>
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
              <StyledLabel htmlFor={index}></StyledLabel>
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
              <Delete />
            </DeleteButton>
          </ListItem>
        ))}
      </InputWrapper>
      <Button type='submit'>{isEditPage ? "Save Changes" : "Save Bill"}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  width: ${(props) => (props.default ? "100%" : "6.5rem")};
  height: 3rem;
  font-size: ${StyledCaption};
  border-radius: 1em;
  border: 1px solid var(--clr-accent);
  padding: 1em 0.7em;
  &:focus {
    border: 1.1px solid var(--clr-accent);
  }
`;

const AddButton = styled.button`
  display: flex;
  align-self: flex-end;
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  background-color: var(--clr-primary);
  border: 2px solid var(--clr-accent);
  width: fit-content;
  font-size: var(--txt-label);
  font-weight: 500;
  color: var(--clr-accent);
  height: fit-content;
  margin-bottom: -1.5rem;

  &:hover {
    background-color: var(--clr-accent);
    border: 2px solid var(--clr-primary);
    color: var(--clr-primary);
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const DeleteButton = styled.button`
  outline: none;
  background: transparent;
  border: transparent;
  color: var(--clr-accent);
`;
