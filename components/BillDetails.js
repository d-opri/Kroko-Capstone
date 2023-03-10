import styled from "styled-components";
import {
  StyledCaption,
  StyledHeading,
  StyledSubtitle,
} from "@/components/Fonts.js";

function BillDetails({ title, amount, children }) {
  return (
    <>
      <Container>
        <StyledHeading>{title}</StyledHeading>
        <StyledSubtitle>Total {amount} $ </StyledSubtitle>
        <List>
          <StyledCaption>{children}</StyledCaption>
        </List>
      </Container>
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
  border: 2px solid var(--txt-link);
`;

export default BillDetails;
