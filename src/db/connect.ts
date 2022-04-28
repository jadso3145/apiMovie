import mongoose from "mongoose";

const URI = `mongodb+srv://jadso:jadso-dataBD@cluster0.rdve9.mongodb.net/testByMyself`;

const connection = mongoose
   .connect(URI)
   .then(() => console.log("Connected to MongoDB 😎😎"))
   .catch((err) => console.log(err));
