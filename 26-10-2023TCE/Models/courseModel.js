const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema(
  {
    Course_Name: {
      type: String,
      required: false,
    },
    Course_ID: {
      type: String,
      required: false,
      unique: true,
    },
    Academic_Year: {
      type: String,
      required: true,
    },
    Incharge: {
      type: String,
      required: false,
      unique: false,
    },
    Total_Hours: {
      type: Number,
      required: false,
      unique: false,
    },
    Credits: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Course", CourseSchema);