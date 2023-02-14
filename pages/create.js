import { useRouter } from "next/router";
import BillForm from "../components/Form";
import styled from "styled-components";
import Link from "next/link";

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
      <Title>Create New Bill</Title>
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
  right: 1rem;
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  font-weight: 500;
`;
