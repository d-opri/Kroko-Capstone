import BillDetails from "@/components/BillDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function BillPage() {
  const router = useRouter();
  const { isReady } = router;

  const { data: bill, isLoading, error } = useSWR(`/api/bills/¢{id}`);

  if (!isReady || isLoading || error) return <h1>Loading bills..</h1>;

  return (
    <>
      <Link href={"/"}>X</Link>
      <BillDetails
        title={bill.title}
        total={bill.amount}
        participants={bill.participants}
      />
    </>
  );
}
