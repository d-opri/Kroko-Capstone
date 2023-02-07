import { useRouter } from "next/router";
import BillForm from "../components/Form";

export default function CreateBill({ bill }) {
  const router = useRouter();

  async function addBill(bill) {
    await fetch("api/bills", {
      method: "POST",
      body: JSON.stringify(bill),
    });
    router.push("/bills/${id}");
  }
  return (
    <>
      <BillForm bill={bill} addBill={addBill} />
    </>
  );
}
