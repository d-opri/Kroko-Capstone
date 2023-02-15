import styled from "styled-components";

function BillDetails({ title, amount, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Title>Total {amount} $</Title>
      <List>{children}</List>
    </Container>
  );
}

const Title = styled.h2`
  font-size: var(--fs-subtitle);
  font-weight: 500;
`;

const List = styled.ul`
  margin-top: 1.5rem;

  width: 100%;
`;

const Container = styled.main`
  border-radius: 1.5625em;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  background-color: var(--clr-secondary);
  margin-bottom: 3rem;
`;

export default BillDetails;
