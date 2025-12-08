require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoute");
const questionRoutes = require("./routes/questionRoute");
const setsRoutes = require("./routes/setsRoute");

const app = express();
const PORT = process.env.PORT || 5001;

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

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

// API Routes (must come before static files)
app.use("/api/users", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/sets", setsRoutes);

// Polling endpoint for user updates (Vercel-compatible)
let lastUpdateTimestamp = Date.now();
app.get("/api/users/poll", async (req, res) => {
  try {
    const User = require("./models/authModel");
    const since = req.query.since || 0;
    
    // Get users updated since last poll
    const users = await User.find({
      $or: [
        { joinedOn: { $gte: new Date(parseInt(since)) } },
        { updatedAt: { $gte: new Date(parseInt(since)) } }
      ]
    }).sort({ joinedOn: -1 });
    
    res.json({
      users,
      timestamp: Date.now(),
      hasUpdates: users.length > 0
    });
  } catch (error) {
    console.error("Poll error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static("../frontend"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ 
    message: "Internal server error", 
    error: process.env.NODE_ENV === "development" ? err.message : undefined 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving frontend from: ${require('path').resolve(__dirname, '../frontend')}`);
  console.log(`🔌 Admin panel: http://localhost:${PORT}`);
});
