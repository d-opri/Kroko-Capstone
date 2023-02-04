import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Link href={"/add-bill"}>
      <Title>Add Bill</Title>
    </Link>
  );
}

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  padding-block: 3rem;
`;
