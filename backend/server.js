const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact");

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection URI
const mongoURI = "mongodb+srv://kevinbiju000:bijujoseph12345@portfolio.ns0em.mongodb.net/"; // Update with your MongoDB URI

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

// Routes
app.use("/contact", contactRoute);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
