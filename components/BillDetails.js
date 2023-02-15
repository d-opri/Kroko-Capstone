import styled from "styled-components";
import { StyledSubtitle } from "@/components/Fonts.js";

function BillDetails({ title, amount, children }) {
  return (
    <>
      <Container>
        <StyledSubtitle>{title}</StyledSubtitle>
        <List>{children}</List>
      </Container>

      <StyledAmount>Total {amount} $</StyledAmount>
    </>
  );
}

const List = styled.ul`
  margin-top: 1rem;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 3rem;
  align-items: center;
  background-color: var(--clr-secondary);
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  flex-direction: column;
  border-radius: 1.5625em;
`;

const StyledAmount = styled(StyledSubtitle)`
  text-align: center;
  padding-top: 5rem;
`;
export default BillDetails;
