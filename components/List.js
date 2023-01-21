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
  height: 2.57em;
  background: var(--clr-secondary);
  border-radius: 0.63em;
`;

const ListTitleText = styled.h3`
  width: 100%;
  font-size: 15px;
  text-align: center;
  color: var(--clr-primary);
`;

const AmountText = styled.p`
  width: 100%;
  font-size: 13px;
  text-align: center;
`;
