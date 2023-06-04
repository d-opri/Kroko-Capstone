import styled from "styled-components";
import useSWR from "swr";
import TabBar from "@/components/Navigation";
import {
  StyledSubtitle,
  StyledSubHeading,
  StyledCaption,
  StyledLink,
} from "@/components/Fonts.js";

export default function HomePage() {
  const { data: bill } = useSWR("api/bills");

  const totalBalance = bill?.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Wrapper>
      <BalanceContainer>
        <StyledTitle> Your Balance </StyledTitle>{" "}
        <StyledBalance>{totalBalance || 0} $</StyledBalance>
      </BalanceContainer>

      <StyledSubtitle>Recent Activity</StyledSubtitle>
      {bill && (
        <ListWrapper>
          {bill
            .slice()
            .reverse()
            .map((item) => (
              <ItemLayout key={item.id}>
                <TitleWrapper>
                  <StyledCaption>{item.title}</StyledCaption>
                  <StyledLink href={`/bills/${item.id}`}>
                    View Details
                  </StyledLink>
                </TitleWrapper>
                <StyledCaption>{item.amount} $</StyledCaption>
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
  margin-top: 0.5rem;
  gap: 1rem;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  margin-left: 1rem;
`;

const ItemLayout = styled.li`
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BalanceContainer = styled.div`
  display: flex;

  flex-direction: column;
  border-radius: 1.875em;
  height: 11rem;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 1rem 0 2rem;
  background-color: var(--clr-accent);
`;

const StyledTitle = styled(StyledSubHeading)`
  color: var(--clr-primary);
  font-weight: 400;
`;

const StyledBalance = styled(StyledSubHeading)`
  font-size: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
