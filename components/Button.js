import styled from "styled-components";
import React from "react";
import Link from "next/link";

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export { GhostButton, GhostLinkButton, LinkButton, StyledButton };

const StyledButton = styled.button`
  width: 19.5rem;
  height: 3.5rem;
  border-radius: 2em;
  border: none;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: var(--clr-accent);
  color: var(--clr-primary);
  font-size: var(--fs-caption);

  &:hover {
    background-color: rgba(233, 150, 209, 1);
    font-weight: 600;
  }
`;

const GhostButton = styled(StyledButton)`
  border: 2px solid var(--clr-accent);
  background-color: var(--clr-primary);
  color: var(--clr-accent);

  &:hover {
    border: 3px solid var(--clr-accent);
    font-weight: 600;
    background-color: var(--clr-primary);
  }
`;

const LinkButton = styled(Link)`
  width: 19.5rem;
  height: 3.5rem;
  border-radius: 2em;
  border: none;
  padding: 0.75rem 1rem;
  align-self: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  background-color: var(--clr-accent);
  color: var(--clr-primary);
  font-size: var(--fs-caption);

  &:hover {
    background-color: rgba(233, 150, 209, 1);
    font-weight: 600;
  }
`;

const GhostLinkButton = styled(LinkButton)`
  border: 2px solid var(--clr-accent);
  background-color: var(--clr-primary);
  color: var(--clr-accent);
  text-decoration: none;

  &:hover {
    border: 3px solid var(--clr-accent);
    font-weight: 600;
    background-color: var(--clr-primary);
  }
`;
