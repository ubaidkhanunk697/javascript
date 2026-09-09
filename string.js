// let input = prompt("enter the your them");
// // console.log(input);
// let change = prompt("if you want to create same change");
// let add = input.replaceAll(input, change);

// let display = document.getElementById("container");
// display.innerHTML = add;
// display.classList.add("style");

// --- USER PROFILE ---
// Name: Ahmad
// Role: Frontend Developer
// Status: Verified Pro
// Experience: 3 years (Next year: 4 years)
// --------------------
// let idNumber = +prompt("Enter your id Number");
// let full_Name = prompt("Enter your full Name");
// let type = prompt("Enter your doman");
// let state = prompt("Enter your Country Name");
// let address = prompt("Enter your Address");
// let Skills = [];
// for (let i = 0; i < 5; i++) {
//   let enter = prompt(`Enter your ${i + 1} Skill`);
//   Skills.push(enter);
// }
// let user = {
//   id: idNumber,
//   fullName: full_Name,
//   role: type,
//   Detail: {
//     country: state,
//     city: address,
//   },
//   skills: Skills,
//   isSuspended: false,
// };
// user.experience = "Three year Experience";
// delete user.isSuspended;
// user.Detail.city = "Islamabad";
// user.skills.push("Git", "GitHub");
// // console.log(user);
// for (let key in user) {
//   if (key === "Detail") {
//     for (let key in user.Detail) {
//       console.log(`${key} ${user.Detail[key]}`);
//     }
//   } else {
//     console.log(`${key} ${user[key]}`);
//   }
// }

// let email = "ubaidkhanuk6973937@gmail.com"?.toLowerCase();
// let key = "ubaid123"?.toLowerCase();
// let role = "admin";
// let count = 3;
// let isVarified = true;

// let userName = prompt("Enter Your User Name")?.toLowerCase();
// let pass = prompt("Enter Your password")?.toLowerCase();
// let duity = prompt("Enter your role");

// if (count > 3) {
//   alert("Your account has been suspended");
// } else if (!userName.includes("@")) {
//   alert("Your Email is invalid because @ is missing");
// } else if (userName === email && pass === key) {
//   if (duity === "admin") {
//     console.log("Administrator deshboard");
//   } else if (duity === "editer") {
//     console.log("Editer penal is open Now");
//   } else if (duity === "viewer") {
//     console.log("User Deshboard");
//   }
// } else {
//   console.log("Inviled Email or Password");
// }

// const calculator = (amount, tex) => {
//   let texAmount = (amount * tex) / 100;
//   let total = amount - texAmount;
//   return {
//     amount: amount,
//     texAmount: texAmount,
//     total: total,
//   };
// };
// let client = calculator(2000, 5);
// console.log(client);

// let inventory = [
//   { item: "gaming keyboard", price: 4000 },
//   { item: "wirLess mouse", price: 1800 },
//   { item: "usb microphone", price: 6500 },
// ];
// let formattedInventory = inventory.map((inventory) => {
//   let code = inventory.item.slice(0, 3).toUpperCase();
//   let title = inventory.item[0].toUpperCase() + inventory.item.slice(1);

//   let delery;
//   if (inventory.price > 2000) {
//     delery = "0 charges";
//   } else {
//     delery = "2 charges";
//   }
//   return {
//     Code: code + "-101",
//     title: title,
//     delery: delery,
//   };
// });
// console.log(formattedInventory);

// let sum = 0;
// let marks = [85, 97, 44, 37, 76, 60];
// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }
// console.log(sum / marks.length);

let array = [250, 645, 300];
for (let val of array) {
  let offer = val / 10;
  array = val - offer;
  console.log(array);
}
