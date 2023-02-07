import mongoose, { model, models, Schema } from "mongoose";

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

export { getAllBills, getBill, createBill };
