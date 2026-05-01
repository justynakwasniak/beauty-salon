import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { randomUUID } from "node:crypto";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: frontendUrl,
  })
);
app.use(express.json());

const bookings = [];

app.post("/api/bookings", (req, res) => {
  const { name, phone, message = "", source = "unknown" } = req.body ?? {};

  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({
      success: false,
      error: "name and phone are required",
    });
  }

  const booking = {
    id: randomUUID(),
    name: name.trim(),
    phone: phone.trim(),
    message: String(message).trim(),
    source: String(source).trim(),
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);

  return res.status(201).json({
    success: true,
    booking,
  });
});

app.get("/api/bookings", (_req, res) => {
  return res.json({
    success: true,
    count: bookings.length,
    bookings,
  });
});

app.listen(port, () => {
  console.log(`Backend API listening on http://localhost:${port}`);
});
