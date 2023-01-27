import { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

function AddParticipants() {
  const [list, setList] = useState([]);
  const [addName, setAddName] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const validateInput = ({ addName }) => {
    if (!addName.trim()) {
      return window.alert("Enter a name");
    }
    if (addName.length < 15) {
      return window.alert("Maximum of 15 characters");
    }
    return true;
  };

  function handleAddItem(event) {
    event.preventDefault();

    const validation = validateInput({ addName });

    if (!validation) {
      return null;
    }

    setAddName("");
    setList([
      ...list,
      {
        label: addName,
        value: isPaid,
        id: uuid(),
      },
    ]);
  }
  function handleDeleteItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Fieldset>
      <legend>Participants</legend>
      <label htmlFor='input'>Add Participants</label>
      <input
        value={addName}
        pattern='^[0-9,.]{1,10}'
        name='input'
        id='input'
        onChange={(event) => setAddName(event.target.value)}
        type='text'
        placeholder='Add Name'
      />
      <button type='button' onClick={handleAddItem}>
        Add Participant
      </button>
      <Subtitle>Paid By</Subtitle>
      {list
        .slice()
        .reverse()
        .map((item) => (
          <List key={item.index}>
            <label htmlFor='participants'>{item.label}</label>
            <input
              type='radio'
              id={item.id}
              value={item.label}
              onChange={(event) => setIsPaid(event.target.value)}
              name='participants'
              checked={isPaid === item.value}
            />
            <button type='button' onClick={() => handleDeleteItem(item.id)}>
              X
            </button>
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
