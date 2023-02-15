import styled from "styled-components";
import { StyledSubtitle } from "@/components/Typography.js";
import Bill from "@/assets/bill.svg";

function BillDetails({ title, amount, children }) {
  return (
    <>
      <Container>
        <StyledSubtitle>{title}</StyledSubtitle>
        <List>{children}</List>
      </Container>
      <BillContainer />
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
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  flex-direction: column;
  border-radius: 1.5625em;
`;

const BillContainer = styled(Bill)`
  z-index: -1;
  height: auto;
  position: absolute;
  width: 100%;
`;

const StyledAmount = styled(StyledSubtitle)`
  text-align: center;
  padding-top: 5rem;
`;
export default BillDetails;
