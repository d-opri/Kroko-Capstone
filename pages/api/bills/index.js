import { getAllBills, createBill } from "@/helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const bills = await getAllBills(request.query.id);
      response.status(200).json(bills);
      break;
    }
    case "POST": {
      const bill = JSON.parse(request.body);
      const createdBill = await createBill(bill);
      response.status(201).json(createdBill);
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "POST, GET")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
