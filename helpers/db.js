import mongoose, { model, models, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const URI = `mongodb+srv://Krokodil:${process.env.MONGODB_PASSWORD}@kroko.sd7bt9q.mongodb.net/keks?retryWrites=true&w=majority`;
const billSchema = new Schema({
  title: String,
  amount: { type: Number },
  id: String,
  participants: [
    {
      id: String,
      name: String,
      paid: { type: Number },
      balance: String,
    },
  ],
});

const Bill = models.Bill || model("Bill", billSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function createBill(bill) {
  await connectDatabase();

  const createdBill = await Bill.create({
    ...bill,
    id: uuidv4(),
  });

  return createdBill;
}

async function getBill(id) {
  await connectDatabase();
  const bill = await Bill.findOne({ id });
  return bill;
}

async function getAllBills() {
  await connectDatabase();

  const bills = await Bill.find({});
  return bills;
}

async function updateBill(id, bill) {
  await connectDatabase();
  await Bill.updateOne({ id }, bill);

  const updateBill = getBill(id);

  return updateBill;
}

export { getAllBills, getBill, updateBill, createBill };
