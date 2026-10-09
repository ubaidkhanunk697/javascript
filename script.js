// let items = [250, 645, 300, 900, 50];
// let index = 0;
// for (let val of items) {
//   console.log(`the first index is ${index} and value is ${val}`);
//   let offer = val / 10;
//   items[index] = items[index] - offer;
//   index++;
// }

// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);
// first method
// let fruits = ["Mango", "Banana", "Apple", "Orange"];
// for (let i = 1; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // second method
// console.log(fruits[1]);

// console.log(fruits[2]);

// console.log(fruits[3]);
// let fruits = ["Mango", "Banana", "Apple", "Orange"];
// fruits[0] = "Pinapple";
// fruits[fruits.length - 1] = "Watermelan";
// console.log(fruits);

// let fruits = ["Mango", "Banana", "Apple"];
// fruits.push("Orange");
// fruits.push("Pineapple");
// fruits.push("Watermelon");
// console.log(fruits);
// for (let i = 0; i < 3; i++) {
//   let add = prompt("Enter Your New add fruit Name");
//   fruits.push(add);
// }
// console.log(fruits);
// first method
// let fruits = ["Apple", "Banana", "Pineapple", "Orange", "Mango"];
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits.pop());
//   i++;
// }
// second method
// let fruits = ["Apple", "Banana", "Pineapple", "Orange", "Mango"];
// let i = 2;
// while (i < fruits.length) {
//   console.log(fruits.pop());
// }

// let fruits = ["Apple", "Banana", "Pineapple", "Orange", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits.pop());
// }
// let fruits = ["Apple", "Manago", "Banana"];
// let i = 0;
// do {
//   let add = prompt("Enter your fivourt fruit name");
//   fruits.unshift(add);
//   i++;
// } while (i < 3);
// console.log(fruits);
// let fruits = ["Mango", "Apple", "Banana", "Watermelon", "Pineapple"];

// fruits.forEach(function (fruit, index) {
//   console.log(`I love ${index + 1}, ${fruit}`);
// });

// let number = [12, 23, 32, 1, 6, 9, 19, 44, 55, 34];
// let filterNumber = number.filter(function (number) {
//   return number > 20;
// });
// console.log(filterNumber);
// let number = [12, 21, 19, 18, 22, 43];
// let numberFind = number.find(function (number) {
//   return number > 20;
// });
// alert(numberFind);

// let fruits = ["Apple", "Banana", "Orange", "Pineapple"];
// console.log(fruits.includes("Apple"));
// console.log(fruits.includes("Watermelon"));

// let fruits = ["Apple", "Banana", "Pineapple", "Orange"];

// console.log(fruits.indexOf("Apple"));
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.indexOf("Watermelon"));

// let number = [50, 40, 30, 20, 10];

// number.sort(function (a, b) {
//   return b - a;
// });
// console.log(number);
// let fruits = ["Apple", "Banana", "Pineapple"];

// fruits.splice(fruits.indexOf("Pineapple"), 0, "Watermelon", "Mango");

// console.log(fruits.join("|"));

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
// fruits.push("Watermelon");
// console.log(fruits);
// console.log(fruits.pop());
// fruits.unshift("Strawberry");
// console.log(fruits);
// console.log(fruits.shift());
// console.log(`The length of the whole array is ${fruits.length}`);
// console.log(fruits[0], fruits[fruits.length - 1]);

// fruits.splice(1, 1, "Grapas");
// console.log(fruits);

// let newFruits = fruits.forEach(function (fruits, index) {
//   console.log(`The index is ${index}, ${fruits}`);
// });

// let mapFruits = fruits.map(function (fruits) {
//   console.log(fruits.toUpperCase());
// });

// let filterFruits = fruits.filter(function (fruits) {
//   return fruits.length > 5;
// });
// console.log(filterFruits);

// let findFruits = fruits.find(function (fruits) {
//   return fruits.length > 6;
// });
// console.log(findFruits);

// console.log(fruits.includes("Mango"));
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.sort());

// let numbers = [50, 10, 80, 30, 20];
// console.log(numbers.sort());

// let descending = numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(descending);

// console.log(fruits.slice(1, 3));

// fruits.splice(3, 1);
// console.log(fruits);
// fruits.splice(2, 0, "Kiwi");
// console.log(fruits);
// fruits.splice(fruits.indexOf("Mango"), 1, "Peach");
// console.log(fruits);

// console.log(fruits.join("|"));

// console.log(fruits.reverse());

// let everyFruits = fruits.every(function (fruits) {
//   return fruits.length > 3;
// });
// console.log(everyFruits);

// let sameFruits = fruits.some(function (fruits) {
//   return fruits.length > 8;
// });

// console.log(sameFruits);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies.shift());
// companies.splice(companies.indexOf("Uber"), 1, "Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// let person = {
//   fullName: "Muhammad",
//   age: 23,
//   city: "Peshawar",
//   profession: "Engineer",
// };
// let property = "fullName";
// console.log(person[property]);
// person.email = "ubaidkhan@gmail.com";
// person.experience = "One Year";
// delete person.experience;
// delete person.city;
// person.salary = 190000;
// console.log(person);

// console.log(
//   `The Name of the person is ${person.fullName}, Age is ${person.age}. He is blong to ${person.city} and the Profession is ${person.profession} Gmail account is ${person.email}, and experience is ${person.experience}`,
// );

// let person = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   profession: "AI Engineer",
//   introduce: function () {
//     console.log(
//       `Hello! My Name is ${this.fullName}, and my profession is ${this.profession}`,
//     );
//   },
// };
// person.introduce();
// let person = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   profession: "Web Developer",
//   grees: function (name) {
//     console.log(`Hello ${name}! my name is ${this.fullName}`);
//   },
// };
// person.grees("Ali");
// let person = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   profession: "Web Development",
//   getIntroducion: function () {
//     return `My name is ${this.fullName}, and my age is ${this.age}`;
//   },
// };
// let introduction = person.getIntroducion();
// console.log(introduction);

// let person = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   profession: "Web Developer",
//   salary: 50000,
//   bouns: 10000,
//   getPlus: function () {
//     return this.salary + this.bouns;
//   },
// };

// let salarys = person.getPlus();
// console.log(salarys);

// let person = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   profession: "Web development",
//   increase: function () {
//     this.age = this.age + 1;
//   },
// };

// person.increase();

// console.log(person.age);

// person.increase();
// console.log(person.age);

// let person = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   increment: function (year) {
//     this.age = this.age + year;
//   },
// };
// person.increment(5);
// console.log(person);

// let salary = {
//   fullName: "Ubaid Ur Rahman",
//   age: 21,
//   salary: 50000,
//   increaseSalary: function (salary) {
//     this.salary = this.salary + salary;
//   },
// };
// salary.increaseSalary(10000);
// console.log(salary);

let bankAccount = {
  owner: "Ubaid",
  balance: 20000,
  deposite: function (depos) {
    this.balance = this.balance + depos;
  },
  withDraw: function (draw) {
    this.balance = this.balance - draw;
  },
};
bankAccount.deposite(10000);
console.log(`Now the amount in your account is ${bankAccount.balance}`);
bankAccount.withDraw(5000);
console.log(`You with draw 5000 Rs now your balance is${bankAccount.balance}`);
