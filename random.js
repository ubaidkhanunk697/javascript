let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#-_0123456789";
let length = 8;
let password = "";

let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener("click", () => {
  let clear = "";
  password = clear;
  for (let i = 0; i < length; i++) {
    let cont = Math.floor(Math.random() * char.length);
    password += char[cont];
  }
  container.innerHTML = password;
});

let remove = document.getElementById("remove");

remove.addEventListener("click", () => {
  container.innerHTML = "";
});

let save = document.getElementById("save");
let pass = document.getElementById("password");

save.addEventListener("click", () => {
  pass.innerHTML = password;
  pass.classList.toggle("dark");
});
