import BillForm from "@/components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

export default function EditBillPage() {
  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;

  const { data: bill, isLoading, error } = useSWR(`/api/bills/${id}`);

  async function editBill(bill) {
    await fetch(`/api/bills/${id}`, {
      method: "PATCH",
      body: JSON.stringify(bill),
    });
    router.push("/");
  }
  if (!isReady || isLoading || error) return <h2>Loading Bill..</h2>;

  return (
    <>
      <StyledLink href={`/bills/${id}`}>X</StyledLink>
      <Title>Edit Bill</Title>
      <BillForm isEditPage={true} onSubmit={editBill} bill={bill} />
    </>
  );
}

export const StyledLink = styled(Link)`
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

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  font-weight: 500;
`;
