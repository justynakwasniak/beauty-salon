import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { randomUUID } from "node:crypto";
import pg from "pg";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "https://beauty-salon-murex.vercel.app",
];
const databaseUrl = process.env.DATABASE_URL;
const { Pool } = pg;

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

const bookings = []; 
const pool = databaseUrl 
  ? new Pool({
      connectionString: databaseUrl,
      ssl: databaseUrl.includes("localhost")
        ? false
        : {
            rejectUnauthorized: false,
          },
    })
  : null;

const initializeDatabase = async () => {
  if (!pool) {
    console.log("DATABASE_URL not set. Using in-memory storage.");
    return;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      service TEXT NOT NULL DEFAULT '',
      booking_date TEXT NOT NULL DEFAULT '',
      booking_time TEXT NOT NULL DEFAULT '',
      message TEXT NOT NULL DEFAULT '',
      source TEXT NOT NULL DEFAULT 'unknown',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await pool.query(
    "ALTER TABLE bookings ADD COLUMN IF NOT EXISTS service TEXT NOT NULL DEFAULT ''"
  );
  await pool.query(
    "ALTER TABLE bookings ADD COLUMN IF NOT EXISTS booking_date TEXT NOT NULL DEFAULT ''"
  );
  await pool.query(
    "ALTER TABLE bookings ADD COLUMN IF NOT EXISTS booking_time TEXT NOT NULL DEFAULT ''"
  );
  console.log("Connected to PostgreSQL. Using persistent storage.");
};

app.post("/api/bookings", async (req, res) => {
  const { name, phone, service, date, time, message = "", source = "unknown" } =
    req.body ?? {};

  if (
    !name?.trim() ||
    !phone?.trim() ||
    !service?.trim() ||
    !date?.trim() ||
    !time?.trim()
  ) {
    return res.status(400).json({
      success: false,
      error: "name, phone, service, date and time are required",
    });
  }

  const booking = {
    id: randomUUID(),
    name: name.trim(),
    phone: phone.trim(),
    service: String(service).trim(),
    date: String(date).trim(),
    time: String(time).trim(),
    message: String(message).trim(),
    source: String(source).trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    if (pool) {
      await pool.query(
        `INSERT INTO bookings (id, name, phone, service, booking_date, booking_time, message, source, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          booking.id,
          booking.name,
          booking.phone,
          booking.service,
          booking.date,
          booking.time,
          booking.message,
          booking.source,
          booking.createdAt,
        ]
      );
    } else {
      bookings.push(booking);
    }

    return res.status(201).json({
      success: true,
      booking,
    });
  } catch {
    return res.status(500).json({
      success: false,
      error: "Could not save booking",
    });
  }
});

app.get("/api/bookings", async (_req, res) => {
  try {
    if (pool) {
      const result = await pool.query(
        `SELECT id, name, phone, service, booking_date AS "date", booking_time AS "time", message, source, created_at AS "createdAt"
         FROM bookings
         ORDER BY created_at DESC`
      );

      return res.json({
        success: true,
        count: result.rows.length,
        bookings: result.rows,
      });
    }

    return res.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch {
    return res.status(500).json({
      success: false,
      error: "Could not fetch bookings",
    });
  }
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on", PORT);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize backend:", error);
    process.exit(1);
  });
