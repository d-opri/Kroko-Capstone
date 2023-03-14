import styled from "styled-components";
import Logo from "@/assets/planet.svg";

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <StyledBanner>
          <Logo style={{ color: "var(--clr-accent)" }} />
        </StyledBanner>

        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem;
  gap: 1rem;
`;

const StyledBanner = styled.div`
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
