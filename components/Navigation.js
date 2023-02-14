import Link from "next/link";
import styled from "styled-components";

const TabBar = () => (
  <Backround>
    <TabBarContainer>
      <TabButton href='/'>Home</TabButton>
      <TabButton href='/create'>Add Bill</TabButton>
    </TabBarContainer>
  </Backround>
);

export default TabBar;

const Backround = styled.nav`
  background-color: var(--clr-primary);
  width: 100%;
  position: fixed;
  align-self: center;
  bottom: 0;
  height: 5.1rem;
  padding: 1.5rem 1.8rem 2rem;
`;

const TabBarContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;
`;

const TabButton = styled(Link)`
  text-decoration: none;
  width: 2rem;
  height: 2rem;
  color: var(--clr-accent);
  font-weight: 700;
`;
