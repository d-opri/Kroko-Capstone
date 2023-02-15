import BillForm from "@/components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledSubHeading } from "@/components/Typography";

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
      <StyledLinkIcon href={`/bills/${id}`}>X</StyledLinkIcon>
      <StyledSubHeading>Edit Bill</StyledSubHeading>
      <BillForm isEditPage={true} onSubmit={editBill} bill={bill} />
    </>
  );
}

export const StyledLinkIcon = styled(Link)`
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
