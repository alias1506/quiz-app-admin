require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoute");
const questionRoutes = require("./routes/questionRoute");
const setsRoutes = require("./routes/setsRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Quiz", // This ensures you're using the correct database
  })
  .then(() => console.log("✅ MongoDB connected to 'Quiz' database"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use(express.static("../frontend"));

app.use("/api/users", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/sets", setsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
