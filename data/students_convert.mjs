import * as fs from "fs";

const students = fs.readFileSync("./data/students.txt", "utf-8");
const studentsList = students.split("\r\n");

fs.appendFileSync("./data/students.json", "[\r\n");
studentsList.forEach((student) => {
  student = student.trim();
  const studentParts = student.split(/\t/);
  if (studentParts.length < 2) {
    console.log("Skipping item with insufficient parts: ", student);
    return;
  }
  const studentId = studentParts[0];
  const firstname = studentParts[1];
  const lastname = studentParts[2];
  const course = studentParts[3];
  const studentData = {
    idOld: studentId,
    firstname: firstname,
    lastname: lastname,
    course: course,
  };

  fs.appendFileSync("./data/students.json", JSON.stringify(studentData) + ",\r\n");
});
fs.appendFileSync("./data/students.json", "]\r\n");
console.log("Students data conversion completed successfully.");
