import mongoose from "mongoose";

const dbConnection = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/ITI")
    .then(() => console.log("DB connection Successful!"))
    .catch(() => console.log("Database error"));
};

export default dbConnection;
