import { useRouter } from "next/router";
import BillForm from "../components/Form";
import styled from "styled-components";
import Link from "next/link";
import { StyledSubHeading } from "@/components/typography";

export default function CreateBill({ bill }) {
  const router = useRouter();

  async function addBill(bill) {
    const response = await fetch("api/bills", {
      method: "POST",
      body: JSON.stringify(bill),
    });

    const createdBill = await response.json();
    router.push(`/bills/${createdBill.id}`);
  }

  return (
    <>
      <StyledLink href='/'> X </StyledLink>
      <StyledSubHeading>Create New Bill</StyledSubHeading>
      <BillForm isEditPage={false} bill={bill} onSubmit={addBill} />
    </>
  );
}

const StyledLink = styled(Link)`
  color: var(--clr-accent);
  width: 2rem;
  height: 2rem;
  font-size: large;
  position: absolute;
  top: 4rem;
  left: 2rem;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
`;
