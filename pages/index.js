import BillDetails from "@/components/BillDetails.js";
import Activity from "../components/activity";

export default function HomePage({ bill }) {
  return (
    <>
      <Activity />
      {bill && (
        <BillDetails title={bill.title} total={bill.amount}>
          {bill.participants.map((participant) => {
            <div key={participant.id}>
              {participant.name}
              {participant.balance}
            </div>;
          })}
        </BillDetails>
      )}
    </>
  );
}
