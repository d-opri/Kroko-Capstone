import styled from "styled-components";
import React from "react";

export default function List(props) {
  return (
    <>
      <ListLayout>
        {props.items.map((item) => (
          <li key={item.id}>
            <ListItemLayout>
              <ListTitleText>{item.title}</ListTitleText>

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
            </ListItemLayout>
          </li>
        ))}
      </ListLayout>
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
  background: var(--clr-secondary);
  border-radius: 0.8em;
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 20em;
  height: 3em;
`;

const ListTitleText = styled.h3`
  margin-right: auto;
  padding-left: 1em;
  font-size: var(--fs-caption);
  text-align: center;
  color: var(--clr-primary);
`;

const AmountText = styled.p`
  margin-left: auto;
  padding-right: 1em;
  font-size: var(--fs-links);
  text-align: center;
`;
