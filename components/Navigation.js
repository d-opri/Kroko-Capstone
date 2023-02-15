import Link from "next/link";
import styled from "styled-components";

const TabBar = () => (
  <Backround>
    <TabBarContainer>
      <TabIcon href='/create'>Add </TabIcon>
      <TabIcon href='/'>Home</TabIcon>
    </TabBarContainer>
  </Backround>
);

export default TabBar;

const Backround = styled.nav`
  background-color: var(--clr-primary);
  width: 100%;
  position: fixed;
  align-self: center;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  height: 5.1rem;
`;

const TabBarContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;
`;
const TabIcon = styled(Link)`
  text-decoration: none;
  width: 2rem;
  height: 2rem;
  background-color: green;
  color: var(--clr-accent);
  font-weight: 700;
`;
