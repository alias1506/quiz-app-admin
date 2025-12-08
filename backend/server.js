require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const authRoutes = require("./routes/authRoute");
const questionRoutes = require("./routes/questionRoute");
const setsRoutes = require("./routes/setsRoute");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Make io accessible to routes
app.set('io', io);

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

// Serve static files (HTML, CSS, JS)
app.use(express.static("../frontend"));

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Admin client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Admin client disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ 
    message: "Internal server error", 
    error: process.env.NODE_ENV === "development" ? err.message : undefined 
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving frontend from: ${require('path').resolve(__dirname, '../frontend')}`);
  console.log(`🔌 Admin panel: http://localhost:${PORT}`);
  console.log(`📡 Socket.IO server ready`);
});
