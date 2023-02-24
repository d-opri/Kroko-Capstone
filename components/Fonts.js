import styled from "styled-components";
import Link from "next/link";

const StyledHeading = styled.h1`
  font-size: var(--fs-title);
  font-weight: 500;
  color: ${(props) => props.color || "var(--txt-primary)"};
`;

const StyledSubHeading = styled.h2`
  font-size: var(--fs-title);
  font-weight: 400;
  color: ${(props) => props.color || "var(--clr-primary)"};
`;

const StyledSubtitle = styled.h3`
  font-size: var(--fs-subtitle);
  font-weight: 400;
  color: ${(props) => props.color || "var(--txt-primary)"};
`;

const StyledCaption = styled.p`
  font-size: var(--fs-caption);
  font-weight: 300;
  color: ${(props) => props.color || "var(--txt-primary)"};
`;

const StyledLink = styled(Link)`
  font-size: var(--fs-link);
  color: var(--txt-link);
  text-decoration: none;
  font-weight: 300;

  &:hover {
    font-weight: 400;
    color: var(--clr-hover);
  }
`;

const StyledLabel = styled.label`
  font-size: var(--fs-label);
  font-weight: 400;
  color: ${(props) => props.color || "var(--clr-accent)"};
`;

export {
  StyledHeading,
  StyledSubHeading,
  StyledSubtitle,
  StyledCaption,
  StyledLabel,
  StyledLink,
};
