import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <StyledLogo>ø</StyledLogo>

        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  margin: 6rem 2rem;
  gap: 1rem;
`;

const StyledLogo = styled.h1`
  align-self: center;
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
