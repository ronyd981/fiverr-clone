import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import {
  userRoute,
  conversationRoute,
  gigRoute,
  messageRoute,
  orderRoute,
  reviewRoute,
  authRoute,
} from "./routes/index.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// const corsConfig = {
//   origin: process.env.URL || true,
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
// app.use(cors(corsConfig));
// app.options(cors(corsConfig));
app.use(cors());

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
app.get("/", (req, res) => {
  res.send("Amigo mio");
});
app.get("/api/test", (req, res) => {
  res.send("Aja");
});
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  connectToMongo();
});

export default app;
