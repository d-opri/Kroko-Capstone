async function calculateSplit(amount, participants) {
  const fairShare = amount / participants.length;
  const newBalance = participants.map((participant) => {
    const balance = fairShare - participant.paid;
    return {
      name: participant.name,
      balance: balance > 0 ? ` owes ${balance} $` : ` is owed ${-balance} $`,
    };
  });
  return newBalance;
}

export default calculateSplit;
