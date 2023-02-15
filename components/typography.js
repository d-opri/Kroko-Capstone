import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: var(--fs-title);
  font-weight: 500;
  color: var(--txt-primary);
`;

const StyledSubHeading = styled.h2`
  font-size: var(--fs-title);
  font-weight: 400;
  color: var(--txt-primary);
`;

const StyledSubtitle = styled.h3`
  font-size: var(--fs-subtitle);
  font-weight: 500;
  color: var(--txt-primary);
`;

const Caption = styled.p`
  font-size: var(--fs-caption);
  font-weight: 500;
  color: ${(props) => props.color || "var(--txt-primary)"};
`;

const Body = styled(Caption)`
  font-weight: 400;
`;

const Link = styled(Link)`
  font-size: var(--fs-link);
  font-weight: 300;
  color: var(--txt-link);
`;

const Label = styled.p`
  font-size: var(--fs-label);
  font-weight: 400;
  color: var(--clr-accent);
`;

export {
  StyledHeading,
  StyledSubHeading,
  StyledSubtitle,
  Caption,
  Body,
  Label,
  Link,
};
