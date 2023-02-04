const BillDetails = ({ title, amount, participants }) => {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <p>Total amount: {amount}</p>
      <h2>Participants</h2>
      <ul>
        {participants.map((participant) => (
          <li key={participant.name}>
            {participant.name}: {participant.balance}
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default BillDetails;

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  text-align: center;
  padding-block: 5rem;
`;
