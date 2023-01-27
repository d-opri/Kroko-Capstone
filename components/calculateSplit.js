const uuid = require("react-uuid");

const calculateSplit = (participants, totalAmount, paidBy) => {
  const splitShare = participants.forEach((participant) => {
    if (paidBy) {
      return {
        id: uuid,
        name: participant.label,
        balance: totalAmount / participant.length,
      };
    } else {
      return {
        id: uuid,
        name: participant.label,
        blance: (totalAmount - totalAmount) / participant.length,
      };
    }
  });
  return splitShare;
};
