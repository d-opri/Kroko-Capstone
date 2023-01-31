function calculateSplitShare(participants, amount, paidById) {
  const splitShare = participants.map((participant) => {
    participant.id === paidById
      ? {
          id: participant.label,
          name: participant.label,
          share: amount - amount / participant.length,
        }
      : {
          id: participant.label,
          name: participant.label,
          share: -amount / participant.length,
        };
  });
  return splitShare;
}

describe("Calculate Split Function", () => {
  test("it should divide the amount equally between the number of participants and return positive if 'paidBy' and negative if not", () => {
    const participants = [
      {
        "user.id": 1,
        share: 10,
      },
      {
        "user.id": 2,
        share: -10,
      },
    ];
    const amount = 20;

    const paidById = 2;
    expect(calculateSplitShare(participants, amount, paidById)).toBe(-10);
  });
});
