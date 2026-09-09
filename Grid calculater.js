let marks = prompt("Enter your Marks");
let outPut;
if (marks < 0 || marks > 100) {
  alert("Sorry Invalid Marks Entery");
} else if (marks >= 90 && marks <= 100) {
  outPut = `Your marks is ${marks}. And Grade is (A+)`;
} else if (marks >= 80 && marks <= 89) {
  outPut = `Your marks is ${marks}. And Grade is (A)`;
} else if (marks >= 70 && marks <= 79) {
  outPut = `Your marks is ${marks}. And Grade is (B)`;
} else if (marks >= 60 && marks <= 69) {
  outPut = `Your marks is ${marks}. And Grade is (C)`;
} else if (marks >= 50 && marks <= 59) {
  outPut = `Your marks is ${marks}. And Grade is (D)`;
} else {
  outPut = "According to your marks you are (Fail)";
}
console.log(outPut);
