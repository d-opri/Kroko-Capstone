import Link from "next/link";
import styled from "styled-components";
import Add from "@/assets/add_plus.svg";
import Home from "@/assets/home.svg";

const TabBar = () => (
  <Backround>
    <TabBarContainer>
      <Link href='/'>
        <Home style={{ color: "var(--clr-accent)" }} />
      </Link>

      <Link href='/create'>
        <Add style={{ color: "var(--clr-accent)" }} />
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
  padding: 1.5rem 1.8rem 2rem;
  left: 0;
  height: 5.1rem;
`;

const TabBarContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6rem;
`;
