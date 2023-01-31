function calculateSplitShare(participants, amount, paidById) {
  const splitShare = participants.map((participant) => {
    user.id === paidById
      ? {
          id: user.label,
          name: participant.label,
          share: amount - amount / participant.length,
        }
      : {
          id: user.label,
          name: participant.label,
          share: -amount / participant.length,
        };
  });
  return splitShare;
}

export { calculateSplitShare };
