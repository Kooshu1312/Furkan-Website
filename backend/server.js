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

// FORM ROUTE  
app.post("/api/book-service", (req, res) => {
  const { name, phone, service, location } = req.body;

  const sql = `INSERT INTO bookings (name, phone, service, location)
               VALUES (?, ?, ?, ?)`;

  db.query(sql, [name, phone, service, location], (err, result) => {
    if (err) {
      console.log("INSERT ERROR:", err);
      return res.status(500).json({ message: "DB insert failed" });
    }
    return res.json({ message: "Booking saved" });
  });
});

app.listen(5000, () => console.log("SERVER RUNNING ON PORT 5000"));
