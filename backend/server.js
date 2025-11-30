import express from "express";
import mysql from "mysql2";

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Happyday2@2@2",
  database: "furkan_automobiles"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected!");
  }
});

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
