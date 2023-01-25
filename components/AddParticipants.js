import { useState } from "react";
import styled from "styled-components";

function AddParticipants() {
  const [list, setList] = useState([]);
  const [addName, setAddName] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  function handleAddList(event) {
    event.preventDefault();
    setAddName("");
    setList([
      ...list,
      {
        label: addName,
        value: isPaid,
      },
    ]);
  }

  return (
    <Fieldset>
      <legend>Participants</legend>
      <label htmlFor='input'>Add Participants</label>
      <input
        value={addName}
        name='input'
        id='input'
        onChange={(event) => setAddName(event.target.value)}
        type='text'
        placeholder='Add Name'
      />
      <button type='button' onClick={handleAddList}>
        Add Participant
      </button>
      <Subtitle>Paid By</Subtitle>
      {list.map((item) => (
        <List key={item.index}>
          <label htmlFor='participants'>{item.label}</label>
          <input
            type='radio'
            id={item.label}
            value={item.label}
            onChange={(event) => setIsPaid(event.target.value)}
            name='participants'
            checked={isPaid === item.value}
          />
        </List>
      ))}
    </Fieldset>
  );
}

const Subtitle = styled.h3`
  text-align: right;
  font-weight: 500;
`;

const List = styled.li`
  display: flex;
  justify-content: right;
  gap: 1em;
`;

const Fieldset = styled.fieldset`
  justify-content: right;
  display: grid;
  gap: 1em;
`;

export default AddParticipants;
