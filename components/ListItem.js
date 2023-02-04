import React from "react";
import styled from "styled-components";

const ListItem = ({ bill }) => {
  return (
    <ListLayout>
      <ItemLayout>
        <TitleText>{bill.title}</TitleText>

        <AmountText
          style={{
            color:
              bill.amount > 0
                ? "var(--positive-balance)"
                : "var(--negative-balance)",
          }}
        >
          {bill.amount} $
        </AmountText>
      </ItemLayout>
    </ListLayout>
  );
};

const ListLayout = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ItemLayout = styled.li`
  background: var(--clr-secondary);
  border-radius: 0.8em;
  display: flex;
  flex-direction: row;
  list-style: none;
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

export default ListItem;
