import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("MONGODB is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB is connecting...");
    connected = true;
  } catch (err) {
    console.error("mongodb error", err);
  }
};
export default connectDB;
