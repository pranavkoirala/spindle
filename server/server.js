import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/messages", messageRoutes);

app.get("*", (req, res) => {
  res.send(
    "Did you mean <a href='https://spindleit.netlify.app'>spindleit.netlify.app</a>? <br> Check out the repo at <a href='https://github.com/pranavkoirala/spindle'>GitHub</a>."
  );
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
