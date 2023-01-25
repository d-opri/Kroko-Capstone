import Form from "./CreateBill";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <StyledLink href='/Activity'>X</StyledLink>
      <Form />;
    </>
  );
}

const StyledLink = styled(Link)`
  color: black;
  font-size: large;
  display: flex;
  justify-content: end;
  margin: 2em;
  font-weight: 900;
`;
