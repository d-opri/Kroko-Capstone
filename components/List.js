import styled from "styled-components";
import React from "react";

export default function List(props) {
  return (
    <>
      {props.items.map((item) => (
        <li key={item.id}>
          <ItemLayout>
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
        </li>
      ))}
    </>
  );
}

const ListLayout = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-left: 2em;
  margin-right: 2em;
`;

const ItemLayout = styled.div`
  background: var(--clr-secondary);
  border-radius: 0.8em;
  display: flex;
  flex-direction: row;
  margin-left: 3em;
  margin-right: 3em;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
  margin-bottom: 1em;
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
