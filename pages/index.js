import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import TabBar from "@/components/Navigation";

export default function HomePage() {
  const { data: bill } = useSWR("api/bills");

  const allBalances = [];
  const yourBalance = { owes: 0, owed: 0 };

  bill?.forEach((bill) => {
    bill.participants.forEach((participant) => {
      const isYou =
        participant.name.toLowerCase() === "you" ||
        participant.name.toLowerCase() === "ich" ||
        participant.name.toLowerCase() === "me";

      const balance = Number(
        (bill.amount / bill.participants.length - participant.paid).toFixed(2)
      );
      allBalances.push(balance);

      isYou && balance > 0
        ? (yourBalance.owed += balance)
        : (yourBalance.owes += balance);
      // if (isYou) {
      //   if (balance > 0) {
      //     yourBalance.owed += balance;
      //   } else if (balance < 0) {
      //     yourBalance.owes += balance;
      //   }
      // }
    });
  });
  const totalBalance = bill?.reduce((acc, curr) => acc + curr.amount, 0);
  const yourFinalBalance = yourBalance.owes - -yourBalance.owed;

  return (
    <Wrapper>
      <BalanceContainer>
        <Subtitle>
          Total Balance <br /> {totalBalance?.toFixed(2) || 0} $
        </Subtitle>
        <Title>
          Your Balance <br /> {yourFinalBalance.toFixed(2) || 0} $
        </Title>
      </BalanceContainer>
      <BalanceWrapper>
        <BalanceDetails income>
          Total Income <br />
          {yourBalance.owed.toFixed(2) || 0} $
        </BalanceDetails>

        <BalanceDetails>
          Total Outcome <br />
          {(-yourBalance.owes).toFixed(2) || 0} $
        </BalanceDetails>
      </BalanceWrapper>

      <Subtitle>Recent Activity</Subtitle>
      {bill && (
        <ListWrapper>
          {bill.map((item) => (
            <ItemLayout key={item.id}>
              <TitleWrapper>
                <TitleText>{item.title}</TitleText>

                <DetailsLink href={`/bills/${item.id}`}>
                  View Details
                </DetailsLink>
              </TitleWrapper>
              <AmountText>{item.amount} $</AmountText>
            </ItemLayout>
          ))}
        </ListWrapper>
      )}
      <TabBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
`;

const Subtitle = styled.h4`
  font-size: var(--fs-subtitle);
  color: var(--clr-primary);
  font-weight: 500;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
`;

const ItemLayout = styled.li`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.h5`
  font-size: var(--fs-caption);
  font-weight: 500;
`;

const AmountText = styled.p`
  font-size: var(--fs-caption);
  font-weight: 500;
`;

const DetailsLink = styled(Link)`
  font-size: var(--fs-label);
  color: var(--secondary-txt);
  text-decoration: none;
  font-weight: 400;
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  font-weight: 500;
  color: var(--clr-primary);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BalanceContainer = styled.h2`
  font-size: var(--fs-caption);
  display: flex;
  flex-direction: column;
  border-radius: 1.875em;
  height: 11rem;
  gap: 1em;
  justify-content: center;
  padding: 1em;
  background-color: var(--clr-accent);
`;

const BalanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
`;

const BalanceDetails = styled.h3`
  font-size: var(--fs-caption);
  color: var(--clr-primary);
  font-weight: 400;
  border-radius: 1em;
  background-color: ${(props) =>
    props.income ? "var(--positive-balance)" : "var(--negative-balance)"};
  text-align: center;
  padding: 0.7em;
  display: flex;
  flex-direction: column;
  width: auto;
`;
