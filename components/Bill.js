import styled from "styled-components";
import Button from "./Button";

function Bill({ title, total, participants }) {
  return (
    <>
      <h1>{title}</h1>
      <main>
        <Subtitle>Details</Subtitle>
        <Subtitle>Total</Subtitle>
        <Body>{total} </Body>
        <Subtitle>Participants</Subtitle>
        {participants
          .slice()
          .reverse()
          .map((item) => (
            <Body key={item.index}></Body>
          ))}
        <Button>Save Bill</Button>
        <StyledLink href='/'>X</StyledLink>
      </main>
    </>
  );
}

const Title = styled.h1`
  font-size: var(--fs-title);
`;

const Subtitle = styled.h2`
  font-size: var(--fs-subtitle);
`;
const Body = styled.p`
  font-size: var(--fs-caption);
`;

const List = styled.li`
  display: flex;
  justify-content: right;
  gap: 1em;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: large;
  display: flex;
  justify-content: end;
  margin: 2em;
  font-weight: 900;
`;
export default Bill;
