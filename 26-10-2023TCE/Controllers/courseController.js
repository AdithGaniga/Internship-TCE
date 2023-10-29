const CourseModel = require("../Models/courseModel");

let createCourse = async (req, res) => {
  try {
    let data = req.body;
    let registerCourse = await CourseModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "Course Data registered successfully",
      data: registerCourse,
    });
  } 
  catch (error) {
    return res.status(500).send({ status: true, msg: "Internal server error" });
  }
};

module.exports = { createCourse };