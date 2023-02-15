import BillDetails from "@/components/BillDetails";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { LinkButton, GhostLinkButton, GhostButton } from "@/components/Button";

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
    <Wrapper>
      <BillDetails title={bill.title} amount={bill.amount}>
        {bill.participants.map((participant, id) => (
          <ListItem key={id}>
            {participant.name}
            <ItemWrapper>
              {participant.balance}
              <br />
              <Paid>paid {participant.paid} $</Paid>
            </ItemWrapper>
          </ListItem>
        ))}
      </BillDetails>
      <GhostButton type='button' onClick={deleteBill}>
        Delete Bill
      </GhostButton>
      <GhostLinkButton href={"/"}>Back to Dashboard</GhostLinkButton>
      <LinkButton href={`/bills/${id}/edit`}>Edit Bill</LinkButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ItemWrapper = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Paid = styled.p`
  color: var(--secondary-txt);
  font-size: var(--fs-label);
`;
