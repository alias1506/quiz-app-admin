const express = require("express");
const router = express.Router();
const User = require("../models/authModel");

// @route   GET /api/users
// @desc    Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ joinedOn: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/users
// @desc    Add one or multiple users
router.post("/", async (req, res) => {
  try {
    let usersData = [];

    if (Array.isArray(req.body)) {
      // Direct array payload
      usersData = req.body;
    } else if (Array.isArray(req.body.data)) {
      // Wrapped in "data" property
      usersData = req.body.data;
    } else {
      // Single user payload
      usersData = [req.body];
    }

    // Validation: filter out invalid objects
    const validUsers = usersData.filter((u) => u.name && u.email);

    if (validUsers.length === 0) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    // Map into schema format
    const usersToInsert = validUsers.map((user) => ({
      name: user.name,
      email: user.email,
      joinedOn: user.joinedOn ? new Date(user.joinedOn) : new Date(),
    }));

    // Insert many (even if one)
    const savedUsers = await User.insertMany(usersToInsert, { ordered: false });

    return res.status(201).json(savedUsers);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(409).json({ message: "Email already used" });
    }
    res.status(500).json({ message: "Error creating user" });
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted", user: deleted });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

module.exports = router;
