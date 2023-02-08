import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

export default function HomePage() {
  const { data: bill } = useSWR("api/bills");

  return (
    <>
      <Title>Split Me</Title>
      <StyledLink href='/create'>Create New Bill</StyledLink>

      {bill && (
        <ListLayout>
          {bill.map((item) => (
            <ItemLayout key={item.id}>
              <TitleText>{item.title}</TitleText>
              <Link href={`/bills/${item.id}`}>View Details</Link>

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
        </ListLayout>
      )}
    </>
  );
}

const ListLayout = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-left: 2em;
  margin-right: 2em;
`;

const ItemLayout = styled.li`
  background: var(--clr-secondary);
  border-radius: 0.8em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
`;

const TitleText = styled.h3`
  font-size: var(--fs-caption);
  text-align: center;
  color: var(--clr-primary);
`;

const AmountText = styled.p`
  font-size: var(--fs-links);
  text-align: center;
`;

const StyledLink = styled(Link)`
  background-color: white;
  border-radius: 3em;
  border: 2px solid black;
  padding: 0.7em;

  width: 10em;
  color: black;
  display: flex;
  justify-content: center;
  margin: auto;
  font-weight: 700;
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  padding-block: 3rem;
`;
