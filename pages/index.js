import styled from "styled-components";
import useSWR from "swr";
import TabBar from "@/components/Navigation";
import {
  StyledSubtitle,
  StyledCaption,
  StyledLink,
} from "@/components/Typography.js";

export default function HomePage() {
  const { data: bill } = useSWR("api/bills");

  return (
    <Wrapper>
      <StyledSubtitle>Recent Activity</StyledSubtitle>
      {bill && (
        <ListWrapper>
          {bill.map((item) => (
            <ItemLayout key={item.id}>
              <TitleWrapper>
                <StyledCaption>{item.title}</StyledCaption>
                <StyledLink href={`/bills/${item.id}`}>View Details</StyledLink>
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
  margin-top: 4rem;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 2.5em;
`;

const ItemLayout = styled.li`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
