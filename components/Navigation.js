import Link from "next/link";
import styled from "styled-components";
import Add from "@/assets/add_plus.svg";
import Home from "@/assets/home.svg";

const TabBar = () => (
  <Backround>
    <TabBarContainer>
      <Link href='/'>
        <Home style={{ color: "var(--clr-primary)" }} />
      </Link>

      <Link href='/create'>
        <Add style={{ color: "var(--clr-primary)" }} />
      </Link>
    </TabBarContainer>
  </Backround>
);

export default TabBar;

const Backround = styled.nav`
  background-color: var(--clr-primary);
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0 2rem;
  left: 0;
  height: 5.1rem;
  box-shadow: 0 -1.2rem 0.9rem var(--clr-primary);
`;

const TabBarContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6rem;
  background-color: var(--clr-accent);
  padding: 0.7rem 0 0.5rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 0.25rem 1.8rem 0.2rem rgba(56, 71, 189, 0.45);
`;
