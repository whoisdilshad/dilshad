// schema.js
const mongoose = require("mongoose");

// ------------------ Course Schema ------------------
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  durationWeeks: {
    type: Number,
    required: [true, "Course duration is required"],
    min: [1, "Course must be at least 1 week long"],
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
    trim: true,
  },
});

// ------------------ Student Schema ------------------
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// ------------------ Models ------------------
const Course = mongoose.model("Course", courseSchema);
const Student = mongoose.model("Student", studentSchema);

module.exports = { Course, Student };
