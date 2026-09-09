// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even Numbar is ${i}`);
//   }
// }

// let num = 12;
// let userNum = +prompt("Guess A Number");

// while (userNum !== num) {
//   userNum = +prompt("Worng Guess. Try again");
// }
// console.log(userNum);

// let tableNum = +prompt("Enter a table number which you want");
// let tableEnd = +prompt("Enter the ending point of the table");
// let i = 1;
// do {
//   console.log(`${tableNum} X ${i} = ${tableNum * i}`);
//   i++;
// } while (i <= tableEnd);

let tableNum = +prompt("Enter a table number which you want");
let tableEnd = +prompt("Enter the ending point of the table");
for (let i = 1; i <= tableEnd; i++) {
  console.log(`${tableNum} X ${i} = ${tableNum * i}`);
}
