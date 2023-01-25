import React from "react";
import { useState } from "react";
import styled from "styled-components";

function AddParticipants() {
  const [list, setList] = useState([]);

  const [addName, setAddName] = useState("");

  const [isPaid, setIsPaid] = useState(false);

  function handleAddList(e) {
    e.preventDefault();
    setAddName("");
    setList([
      ...list,
      {
        label: addName,
        value: isPaid,
      },
    ]);
  }

  function handleChange() {
    setIsPaid(!isPaid);
  }

  return (
    <>
      <label htmlFor='input'></label>
      <input
        value={addName}
        name='input'
        onChange={(e) => setAddName(e.target.value)}
        type='text'
        placeholder='Add Name'
      />
      <button onClick={handleAddList}>Add Participant</button>

      <Subtitle>Paid By</Subtitle>
      <br />

      {list.map((item) => (
        <>
          <Layout>
            <label htmlFor='participants'>{item.label}</label>
            <input
              minLength={2}
              type='radio'
              value={item.label}
              onChange={handleChange}
              name='participants'
              checked={item.value}
            />
          </Layout>
        </>
      ))}
    </>
  );
}

const Subtitle = styled.h2`
  text-align: right;
  font-size: var(--fs-caption);
`;

const Layout = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 1em;
`;

export default AddParticipants;
