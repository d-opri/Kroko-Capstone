import { getBill, deleteBill, updateBill } from "@/helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const bill = await getBill(request.query.id);
      if (!bill) {
        response.status(404).json({
          message: `Bill ${request.query.id} not found.`,
        });
      } else {
        response.status(200).json(bill);
      }
      break;
    }
    case "PATCH": {
      const bill = JSON.parse(request.body);
      const updatedBill = await updateBill(request.query.id, bill);
      if (!updatedBill) {
        response.status(404).json({
          message: `Bill ${request.query.id} couldn't be found.`,
        });
      } else {
        response.status(200).json(updatedBill);
      }
      break;
    }
    case "DELETE": {
      const deletedBill = await deleteBill(request.query.id);
      if (!deletedBill) {
        response.status(404).json({
          message: `Bill ${request.query.id} couldn't be found.`,
        });
      } else {
        response.status(200).json(deletedBill);
      }
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET, PATCH, DELETE")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
