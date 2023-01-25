import React from "react";
import { useState } from "react";

function AddParticipants() {
  const [list, setList] = useState([]);

  const [addName, setAddName] = useState("Add Name");

  const [isPaid, setIsPaid] = useState(false);

  return (
    <>
      <input type='text' />
      <button>Add Participant</button>
      <input type='radio' name='participants' />
      <label htmlFor='participants'></label>
    </>
  );
}

export default AddParticipants;
