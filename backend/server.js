import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

// DB CONNECTION  
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Happyday2@2@2",
  database: "furkan_automobiles"
});

db.connect((err) => {
  if (err) {
    console.log("DB ERROR:", err);
    return;
  }
  console.log("MYSQL CONNECTED");
});

// FORM ROUTE  (CREATE NEW BOOKING)
app.post("/api/book-service", (req, res) => {
  const { name, phone, car_model, description, appointment_date } = req.body;

  const sql = `
    INSERT INTO bookings (name, phone, car_model, description, appointment_date)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, phone, car_model, description, appointment_date],
    (err, result) => {
      if (err) {
        console.log("INSERT ERROR:", err);
        return res.status(500).json({ message: "DB insert failed" });
      }
      return res.json({ message: "Booking saved" });
    }
  );
});


// ⭐⭐ ADMIN PANEL ROUTES ⭐⭐

// 1️⃣ GET all bookings
app.get("/api/bookings", (req, res) => {
  const sql = "SELECT * FROM bookings ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.log("FETCH ERROR:", err);
      return res.status(500).json({ message: "Error fetching bookings" });
    }
    return res.json(results);
  });
});

// 2️⃣ UPDATE booking status
app.put("/api/bookings/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql = "UPDATE bookings SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err) => {
    if (err) {
      console.log("UPDATE ERROR:", err);
      return res.status(500).json({ message: "Status update failed" });
    }
    return res.json({ message: "Status updated" });
  });
});

// 3️⃣ DELETE booking
app.delete("/api/bookings/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM bookings WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.log("DELETE ERROR:", err);
      return res.status(500).json({ message: "Delete failed" });
    }
    return res.json({ message: "Booking deleted" });
  });
});


app.listen(5000, () => console.log("SERVER RUNNING ON PORT 5000"));
