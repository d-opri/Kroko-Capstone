import styled from "styled-components";

export default function List(props) {
  return (
    <>
      <ListLayout>
        {props.items.map((item) => (
          <ItemLayout key={item.id}>
            <TitleText>{item.title}</TitleText>

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
