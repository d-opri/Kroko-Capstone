import styled from "styled-components";
import { StyledSubtitle } from "@/components/typography";

function BillDetails({ title, amount, children }) {
  return (
    <Container>
      <StyledSubtitle>{title}</StyledSubtitle>
      <StyledSubtitle>Total {amount} $</StyledSubtitle>
      <List>{children}</List>
    </Container>
  );
}

const List = styled.ul`
  margin-top: 1rem;
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
`;

export default BillDetails;
