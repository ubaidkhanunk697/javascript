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
// let filterNumber = number.find(function (number) {
//   return number > 20;
// });
// console.log(filterNumber);
// let number = [12, 21, 19, 18, 22, 43];
// let numberFind = number.find(function (number) {
//   return number < 20;
// });
// alert(numberFind);

let fruits = ["Apple", "Banana", "Orange", "Pineapple"];
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Watermelon"));
