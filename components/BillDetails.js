import styled from "styled-components";

function BillDetails({ title, total, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Title>Total: {total} $</Title>
      <Title>Participants</Title>
      <Caption>{children}</Caption>
    </Container>
  );
}

const Title = styled.h2`
  font-size: var(--fs-caption);
`;

const Caption = styled.p`
  font-size: var(--fs-caption);
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  margin: 2em;
`;

export default BillDetails;
