import React, { useState } from "react";
import styled from "styled-components";

function Form() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paid, setPaid] = useState(false);

  return (
    <>
      <Title>Create New Bill</Title>
      <Container>
        <label htmlFor='title'></label>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name='title'
          placeholder='title'
          required
        />
        <label htmlFor='amount'></label>
        <input
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          name='amount'
          placeholder='00.00'
          required
        />

        <button>Calculate</button>
      </Container>
    </>
  );
}

export const Title = styled.h1`
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

export default Form;
