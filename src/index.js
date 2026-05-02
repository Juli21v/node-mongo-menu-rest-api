import express from "express";
import cors from "cors";
import db from "./db.js";
import dotenv from "dotenv";
import product from "./routes/Products.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true, service: "menu-api" });
});

app.use("/api", product);


app.listen(port, () =>
  console.log("Backend server running on port: " + port)
);

db.dbConnection();