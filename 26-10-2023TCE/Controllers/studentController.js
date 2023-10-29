const StudentModel = require("../Models/studentModel");

let createStudent = async (req, res) => {
  try {
    let data = req.body;
    let registerStudent = await StudentModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "Student Data registered successfully",
      data: registerStudent,
    });
  } catch (error) {
    return res.status(500).send({ status: true, msg: "Internal server error" });
  }
};

module.exports = { createStudent };