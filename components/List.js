import styled from "styled-components";
import React from "react";
import listItems from "../db";

export default function List({ children }) {
  return (
    <>
      <ListLayout>
        {listItems.map((item, { id }) => (
          <li key={id}>
            <ListItemLayout>
              <ListTitleText>{item.title}</ListTitleText>

              <AmountText style={{ color: item.amount > 0 ? "green" : "red" }}>
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
  /* Auto layout */
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 268px;
  height: 464px;
  left: calc(50% - 268px / 2);
  bottom: -52px;
`;

const ListItemLayout = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  gap: 134px;

  width: 288px;
  height: 44px;

  /* Gray */

  background: #e1e1e1;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ListTitleText = styled.h3`
  width: 84px;
  height: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: 0.005em;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const AmountText = styled.p`
  width: 64px;
  height: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  text-align: center;
  letter-spacing: 0.005em;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

console.log(listItems);
