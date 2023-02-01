import styled from "styled-components";

function BillDetails({ title, total, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <h3>Total</h3>
      <p>{total} </p>
      <h3>Participants</h3>
      {children}
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  margin-top: 4em;
`;

export default BillDetails;
