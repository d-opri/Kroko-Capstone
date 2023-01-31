// function calculateSplitShare(participants, amount, paidById) {
//   const splitShare = participants.map((participant) => {
//     participant.id === paidById
//       ? {
//           id: participant.label,
//           name: participant.label,
//           share: amount - amount / participant.length,
//         }
//       : {
//           id: participant.label,
//           name: participant.label,
//           share: -amount / participant.length,
//         };
//   });
//   return splitShare;
// }

// describe("Calculate Split Function", () => {
//   test("it should divide the amount equally between the number of participants and return positive if 'paidBy' and negative if not", () => {
//     const participants = [
//       {
//         id: 1,
//         share: 10,
//       },
//       {
//         id: 2,
//         share: -10,
//       },
//       {
//         id: 3,
//         share: -10,
//       },
//     ];
//     const amount = 30;

//     const paidById = 2;
//     expect(calculateSplitShare(participants, amount, paidById)).toBe(-10);
//   });
// });

const calculateSplit = (amount, participants) => {
  const splitResult = participants.map((participant) => {
    const owed = amount - amount / participant.length;
    const paid = -amount / participant.length;
    return {
      id: participant.id,
      value: share > 0 ? participant.owed : participant.paid,
    };
  });
  return splitResult;
};

describe("Calculate Split Function", () => {
  test("calculates each persons share evenly and offsets it with their paid value", () => {
    const participants = [
      {
        id: 1,
        share: 10,
      },
      {
        id: 2,
        share: 20,
      },
      {
        id: 3,
        share: 0,
      },
    ];
    const amount = 30;

    expect(calculateSplit(participants, amount)).toBe(-10);
  });
});
