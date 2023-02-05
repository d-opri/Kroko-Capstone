import { useRouter } from "next/router";
import BillForm from "../components/Form";

export default function AddBill() {
  const router = useRouter();

  async function handleSave(data) {
    try {
      await fetch("/api/bills", {
        method: "POST",
        body: JSON.stringify(data),
      });

      router.push("/api/bills");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <BillForm onSubmit={handleSave} />
    </>
  );
}
