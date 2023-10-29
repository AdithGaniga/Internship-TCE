const express = require("express");
const router = express.Router();
const StudentController = require("../Controllers/studentController");
const CourseController = require("../Controllers/courseController");
const RegisteredStudents =require("../Controllers/registeredstudentsController");

router.post("/register", StudentController.createStudent);
router.post("/course", CourseController.createCourse);
router.get("/registered",RegisteredStudents.viewStudent);

module.exports = router;