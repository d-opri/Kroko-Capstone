import { useRouter } from "next/router";
import BillForm from "./create-bill";

export default function CreateBill() {
  const router = useRouter();

  async function addBill(bill) {
    await fetch("api/bills", {
      method: "POST",
      body: JSON.stringify(bill),
    });
    router.push("/");
  }
  return (
    <>
      <BillForm bill={bill} onSubmit={addBill} />
    </>
  );
}
