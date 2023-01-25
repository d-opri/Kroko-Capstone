import React from "react";
import { useState } from "react";

function AddParticipants() {
  const [list, setList] = useState([]);

  const [addName, setAddName] = useState("Add Name");

  const [isPaid, setIsPaid] = useState(false);

  function handleAddList() {
    setAddName("Add Name");
    setList([
      ...list,
      {
        label: addName,
        value: addName,
      },
    ]);
  }

  function handleChange() {
    setIsPaid(!isPaid);
  }

  return (
    <>
      <input
        value={addName}
        onChange={(e) => setAddName(e.target.value)}
        type='text'
      />
      <button onClick={handleAddList}>Add Participant</button>
      {list.map((item) => (
        <>
          <input
            type='radio'
            value={item.value}
            onChange={handleChange}
            name='participants'
          />
          <label htmlFor='participants'>{item.label}</label>
        </>
      ))}
    </>
  );
}

export default AddParticipants;
