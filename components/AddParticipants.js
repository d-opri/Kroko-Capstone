import React from "react";
import { useState } from "react";

function AddParticipants() {
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
