import { createBill, getAllBills } from "../../../helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const bills = await getAllBills();
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
        .setHeader("Allow", "GET,POST")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
