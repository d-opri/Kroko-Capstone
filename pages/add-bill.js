import { useRouter } from "next/router";
import Form from "@/components/BillForm";

export default function AddBill() {
  const router = useRouter();

  async function addBill(bill) {
    try {
      const response = await fetch("/api/bills", {
        method: "POST",
        body: JSON.stringify(bill),
      });

      if (response.status === 200) {
        router.push("/result");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form onSubmit={addBill} />
      <button type='submit' onClick={handleSubmit}>
        Add Bill
      </button>
    </>
  );
}
