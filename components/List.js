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
  gap: 1.5em;
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 3em;
  background: var(--clr-secondary);
  border-radius: 0.5em;
`;

const ListTitleText = styled.h3`
  width: 100%;
  font-size: var(--fs-caption);
  text-align: center;
  color: var(--clr-primary);
`;

const AmountText = styled.p`
  width: 100%;
  font-size: var(--fs-links);
  text-align: center;
`;
