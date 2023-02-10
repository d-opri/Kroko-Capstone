import BillDetails from "@/components/BillDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

function fetcher(url) {
  return fetch(url).then((response) => response.json());
}

export default function BillPageDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: bill, error, isLoading } = useSWR(`/api/bills/${id}`, fetcher);

  if (isLoading || error) return <h2>Loading Bill..</h2>;

  async function deleteBill() {
    await fetch(`/api/bills/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return (
    <BillDetails title={bill.title} amount={bill.amount}>
      {bill.participants.map((participant, index) => (
        <li key={index}>
          {participant.name} paid {participant.paid} $, and{" "}
          {participant.balance}.
        </li>
      ))}

      <button type='button' onClick={deleteBill}>
        Delete Bill
      </button>
      <Button href={`/bills/${id}/edit`}>Edit Bill</Button>
      <Button href={"/"}>Back to Dashboard</Button>
    </BillDetails>
  );
}

const Button = styled(Link)`
  display: inline-block;
  padding: 0.7em 1.5em;
  background-color: white;
  border-radius: 3em;
  background-color: var(--clr-secondary);
  margin-top: 2em;
  margin-left: 1em;
  color: black;
  text-decoration: none;
`;
