const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Usn: {
      type: String,
      required: true,
      unique: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    Password: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Student", studentSchema);