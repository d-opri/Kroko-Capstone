const uuid = require("react-uuid");

// const calculateSplit = (participants, amount, paidBy) => {
//   const splitShare = participants.forEach((participant) => {
//     if (paidBy) {
//       return {
//         id: uuid,
//         name: participant.label,
//         balance: amount / participant.length,
//       };
//     } else {
//       return {
//         id: uuid,
//         name: participant.label,
//         blance: (amount - amount) / participant.length,
//       };
//     }
//   });
//   return splitShare;
// };

const calculateSplit = (amount, participants) => {
 
const splitResult = participants.map((participant) => {
  const owed = amount - (amount / participant.length)
  const paid = -amount / participant.length
  return {
    id: participant.id,
    name: participant.label,
    value: 
  }
})
return splitResult
}
