import { useRouter } from "next/router";
import BillForm from "../components/Form";

export default function CreateBill({ bill }) {
  const router = useRouter();

  async function addBill(bill) {
    const response = await fetch("api/bills", {
      method: "POST",
      body: JSON.stringify(bill),
    });

    const createdBill = await response.json();
    router.push(`/bills/${createdBill.id}`);
  }
  return (
    <>
      <BillForm bill={bill} addBill={addBill} />
    </>
  );
}
