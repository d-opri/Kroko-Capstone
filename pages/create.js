import { useRouter } from "next/router";
import BillForm from "../components/Form";
import styled from "styled-components";
import Link from "next/link";
import { StyledSubHeading } from "@/components/Typography.js";
import Back from "@/assets/chevron_left.svg";

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
      <StyledLink href='/'>
        <Back />
      </StyledLink>
      <StyledSubHeading>Create New Bill</StyledSubHeading>
      <BillForm isEditPage={false} bill={bill} onSubmit={addBill} />
    </>
  );
}

export const StyledLink = styled(Link)`
  color: var(--clr-accent);
  position: absolute;
  top: 4rem;
  left: 2rem;
`;
