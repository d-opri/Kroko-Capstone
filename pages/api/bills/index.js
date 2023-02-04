import { createBill } from "../../../helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "POST": {
      const bill = JSON.parse(request.body);
      const createdBill = await createBill(bill);
      response.status(201).json(createdBill);
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "POST")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
