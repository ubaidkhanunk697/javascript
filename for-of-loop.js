const student = {
  fullName: "Ubaid Ur Rahman",
  fatherName: "M Anwar",
  UniName: "Abdul Wali Khan Mardan",
  semester: "5th",
  program: "Bechlar Of Computer Science",
};

for (let val in student) {
  console.log(`key = ${val} value of this key is ${student[val]}`);
}
