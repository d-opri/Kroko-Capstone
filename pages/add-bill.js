import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function AddBill() {
  const router = useRouter();

  async function addBill(bill) {
    try {
      const response = await fetch("/api/bills", {
        method: "POST",
        body: JSON.stringify(bill),
      });

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form onSubmit={addBill} />
    </>
  );
}
