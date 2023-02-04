import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://Krokodil:${process.env.MONGODB_PASSWORD}@kroko.sd7bt9q.mongodb.net/?retryWrites=true&w=majority`;

const billSchema = new Schema({
  title: String,
  amount: { type: Number },
  id: String,
  participants: [
    {
      id: String,
      name: String,
      paid: { type: Number },
    },
  ],
  balance: { type: Number },
});

const Bill = models.Bill || model("Bill", billSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function createBill(bill) {
  await connectDatabase();

  const createdBill = await Bill.create({
    ...bill,
    id: crypto.randomUUID(),
  });

  return createdBill;
}

async function getAllBills() {
  await connectDatabase();

  const bills = await Bill.find({});
  return bills;
}

export { getAllBills, createBill };
