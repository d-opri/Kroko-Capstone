import styled from "styled-components";

function BillDetails({ title, amount, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Title>Total: {amount} $</Title>
      <Title>Participants</Title>
      <List>{children}</List>
    </Container>
  );
}

const Title = styled.h2`
  font-size: var(--fs-caption);
`;

const List = styled.div`
  font-size: var(--fs-caption);
  list-style: none;
  text-align: center;
  margin-bottom: 1em;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2em;
  border: 2px solid black;
  margin: 2em;
`;

export default BillDetails;
