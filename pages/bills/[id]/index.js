import BillDetails from "@/components/BillDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function BillPageDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: bill, error, isLoading } = useSWR(`/api/bills/${id}`);

  if (isLoading || error) return <h2>Loading Bill..</h2>;

  return (
    <BillDetails title={bill.title} amount={bill.amount}>
      {bill.participants.map((participant, index) => (
        <li key={index}>
          {participant.name} paid {participant.paid} $, and{" "}
          {participant.balance}.
        </li>
      ))}

      <Link href={"/"}>
        <button type='button'>Back to Dashboard</button>
      </Link>
    </BillDetails>
  );
}
