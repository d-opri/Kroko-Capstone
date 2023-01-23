import React from "react";
import styled from "styled-components";
import { Title } from "./activity";

function Form() {
  return (
    <>
      <Title>Create New Bill</Title>
      <Container>
        <label htmlFor='title'></label>
        <input type='text' name='title' placeholder='title' />
        <label htmlFor='amount'></label>
        <input type='number' name='amount' placeholder='00.00' />
        <button>Calculate</button>
      </Container>
    </>
  );
}

const Container = styled.form`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-left: 2em;
  margin-right: 2em;
`;

export default Form;
