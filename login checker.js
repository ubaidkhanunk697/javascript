let userName = "ubaidrahman12@gmail.com";
let password = "ubaid4321";

let login = prompt("Enter User Name for Login");
let key = prompt("Enter the key");
key = key.toLowerCase();
login = login.toLowerCase();
// login = login.toLowerCase();
// key = key.toLowerCase();

if (login === userName && key === password) {
  console.log("Logged In Successfully");
} else {
  alert("Invalid Password or Gmail");
}

// if (login === userName) {
//   if (key === password) {
//     console.log(`Login Successfull`);
//   } else {
//     alert("Invalid Password");
//   }
// } else {
//   alert("Invalid Email");
// }
