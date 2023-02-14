import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <Header>Split Me</Header>

        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-top: 4rem;
  gap: 2rem;
`;

const Header = styled.h1`
  align-self: center;
  font-size: var(--fs-title);
  font-weight: 500;
  background-color: var(--clr-primary);
  padding: 1rem;
  color: var(--clr-accent);
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
`;
