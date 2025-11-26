"use strict";

function Student(name, surname, birthday, marks = []) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
  this.marks = marks;

  this.attendance = new Array(25).fill(null);
  this._attendanceIndex = 0;

  this.setAbsent = function () {
    if (this._attendanceIndex < 25) {
      this.attendance[this._attendanceIndex] = false;
      this._attendanceIndex++;
    } else {
      console.log("Attendance array is full!");
    }
  };

  this.setPresent = function () {
    if (this._attendanceIndex < 25) {
      this.attendance[this._attendanceIndex] = true;
      this._attendanceIndex++;
    } else {
      console.log("Attendance array is full!");
    }
  };

  this.getAge = function () {
    const todayYear = new Date().getFullYear();

    return todayYear - this.birthday.getFullYear();
  };

  this.getAverageMark = function () {
    if (this.marks.length == 0) return 0;

    return (
      this.marks.reduce((prevMark, nextMark) => prevMark + nextMark, 0) /
      this.marks.length
    );
  };

  this.getSummary = function () {
    const avgMark = this.getAverageMark();
    const attended = this.attendance.filter((atn) => atn === true).length;
    const totalMarked = this.attendance.filter((mark) => mark !== null).length;
    const avgAttendance = totalMarked === 0 ? 0 : attended / totalMarked;

    if (avgMark > 90 && avgAttendance > 0.9) {
      return "Great job";
    } else if (avgMark > 90 || avgAttendance > 0.9) {
      return "Good, but you can better";
    } else {
      return "Radish!";
    }
  };
}

const student1 = new Student(
  "Ivan",
  "Petrenko",
  new Date(2005, 2, 1),
  [95, 100, 92, 88]
);
const student2 = new Student(
  "Maria",
  "Nesteruk",
  new Date(2002, 1, 1),
  [70, 75, 80]
);
const student3 = new Student(
  "Petro",
  "Kulik",
  new Date(1999, 7, 22),
  [60, 65, 58]
);

student1.setPresent();
student1.setPresent();
student1.setAbsent();

student2.setPresent();
student2.setAbsent();
student2.setAbsent();

student3.setAbsent();
student3.setAbsent();
student3.setAbsent();

console.log(student1.name, student1.getAge(), student1.getAverageMark());
console.log(student2.name, student2.getAge(), student2.getAverageMark());
console.log(student3.surname, student3.getAge(), student3.getAverageMark());

console.log("Student 1:", student1.getSummary());
console.log("Student 2:", student2.getSummary());
console.log("Student 3:", student3.getSummary());
