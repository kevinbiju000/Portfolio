const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST request to save contact data
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newContact.save();

    res.status(200).json({ code: 200, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Something went wrong, please try again later.",
    });
  }
});

module.exports = router;
