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

const List = styled.ul`
  font-size: var(--fs-caption);
  list-style: none;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  margin: 2em;
`;

export default BillDetails;
