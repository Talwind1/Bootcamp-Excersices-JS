const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],

  findPerson: function (type, id) {
    if (type === "teacher") {
      return this.teachers.find((teacher) => {
        return teacher.id === id;
      });
    } else {
      return this.students.find((student) => {
        return student.id === id;
      });
    }
  },
  assignStudent: function (studentId, subject) {
    let teacher = school.teachers.find((teacher) => {
      return teacher.subjects.includes("subject");
    });
    if (teacher.capacityLeft > 0) {
      let student = school.findPerson("student", studentId);
      teacher.students.push(student);
    } else {
      console.log("Sorry,no available teachers left");
    }
  },

  assignTeachersSubject: function (teacherId, subject) {
    let teacher = school.findPerson("teacher", teacherId);
    if (
      !teacher.subjects.find((subj) => {
        return subj === subject;
      })
    ) {
      teacher.subjects.push(subject);
    }
  },

  isExistSubject: function (teacherId, subject) {
    let teacher = school.findPerson("teacher", teacherId);
    return teacher.subjects.includes("subject");
  },
};

school.assignTeachersSubject(1, "math");
console.log(school.teachers[0]);
