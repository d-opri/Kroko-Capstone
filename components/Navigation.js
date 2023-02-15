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
  bottom: 0;
  padding: 1rem;
  left: 0;
  height: 5.1rem;
`;

const TabBarContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6rem;
`;
const TabIcon = styled(Link)`
  text-decoration: none;
  width: 2rem;
  height: 2rem;
  color: var(--clr-accent);
  font-weight: 700;
`;
