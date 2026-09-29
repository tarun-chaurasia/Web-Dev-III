const express = require("express");
const students = require("../data/students");

const router = express.Router();

const isValidBody = (body, requireAll = true) => {
  const { name, course } = body || {};
  const nameOk = typeof name === "string" && name.trim() !== "";
  const courseOk = typeof course === "string" && course.trim() !== "";
  return requireAll ? nameOk && courseOk : nameOk || courseOk;
};

const parseId = (value) => {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
};

router.get("/", (req, res) => {
  res.status(200).json(students);
});

router.get("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: "Invalid student id" });
  }

  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.status(200).json(student);
});

router.post("/", (req, res) => {
  if (!isValidBody(req.body)) {
    return res
      .status(400)
      .json({ error: "Both 'name' and 'course' are required (non-empty strings)" });
  }

  const nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1;
  const newStudent = {
    id: nextId,
    name: req.body.name.trim(),
    course: req.body.course.trim(),
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

router.put("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: "Invalid student id" });
  }
  if (!isValidBody(req.body, false)) {
    return res
      .status(400)
      .json({ error: "Provide a non-empty 'name' and/or 'course' to update" });
  }

  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, course } = req.body;
  if (typeof name === "string" && name.trim() !== "") student.name = name.trim();
  if (typeof course === "string" && course.trim() !== "") student.course = course.trim();

  res.status(200).json(student);
});

router.delete("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: "Invalid student id" });
  }

  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const [deleted] = students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully", student: deleted });
});

module.exports = router;
