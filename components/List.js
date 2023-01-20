import styled from "styled-components";
import React from "react";
import listItems from "../db";

export default function List() {
  return (
    <>
      <ListLayout>
        {listItems.map((item) => (
          <li key={item.id}>
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
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 100px;
`;

const ListItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 44px;
  background: #e1e1e1;
  border-radius: 10px;
`;

const ListTitleText = styled.h3`
  width: 100%;
  font-size: 15px;
  text-align: center;
  color: #000000;
`;

const AmountText = styled.p`
  width: 100%;
  font-size: 13px;
  text-align: center;
`;
