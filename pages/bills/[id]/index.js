import BillDetails from "@/components/BillDetails";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { LinkButton, GhostButton } from "@/components/Button";
import { StyledLabel } from "@/components/Fonts.js";
import Back from "@/assets/chevron_left.svg";
import Link from "next/link";

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
      <StyledLink href='/'>
        <Back style={{ color: "var(--clr-accent)" }} />
      </StyledLink>
      <BillDetails title={bill.title} amount={bill.amount}>
        {bill.participants.map((participant, id) => (
          <ListItem key={id}>
            {participant.name}
            <BalanceWrapper>
              {participant.balance}
              <br />
              <StyledLabel color='var(--txt-secondary)'>
                paid {participant.paid} $
              </StyledLabel>
            </BalanceWrapper>
          </ListItem>
        ))}
      </BillDetails>
      <GhostButton type='button' onClick={deleteBill}>
        Delete Bill
      </GhostButton>
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

const BalanceWrapper = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledLink = styled(Link)`
  z-index: 2;
  position: fixed;
  top: 4rem;
`;
