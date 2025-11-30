import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.post("/api/book", (req, res) => {
  const { name, phone, service, message } = req.body;

  const sql = "INSERT INTO bookings (name, phone, service, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, phone, service, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to save booking" });
    }
    res.json({ success: true });
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Backend running on port ${process.env.PORT}`)
);
