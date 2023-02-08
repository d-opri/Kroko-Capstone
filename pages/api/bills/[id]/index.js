import { getBill } from "@/helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const bill = await getBill(request.query.id);
      response.status(200).json(bill);
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}
