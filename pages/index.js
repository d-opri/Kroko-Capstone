import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import TabBar from "@/components/Navigation";

export default function HomePage() {
  const { data: bill } = useSWR("api/bills");

  return (
    <Wrapper>
      <Subtitle>Recent Activity</Subtitle>
      {bill && (
        <ListWrapper>
          {bill.map((item) => (
            <ItemLayout key={item.id}>
              <TitleText>
                {item.title}
                <br />
                <DetailsLink href={`/bills/${item.id}`}>
                  View Details
                </DetailsLink>
              </TitleText>

              <AmountText
                style={{
                  color:
                    item.amount > 0
                      ? "var(--positive-balance)"
                      : "var(--negative-balance)",
                }}
              >
                {item.amount} $
              </AmountText>
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
  margin-top: 8rem;
`;

const Subtitle = styled.h2`
  font-size: var(--fs-subtitle);
  font-weight: 500;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  gap: 2.5rem;
`;

const ItemLayout = styled.li`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.h3`
  font-size: var(--fs-caption);
  font-weight: 500;
`;

const AmountText = styled.p`
  font-size: var(--fs-caption);
`;

const DetailsLink = styled(Link)`
  font-size: var(--fs-label);
  color: var(--secondary-txt);
  text-decoration: none;
  font-weight: 400;
`;
