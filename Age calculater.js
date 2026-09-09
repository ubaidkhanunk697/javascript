let age = prompt("Enter your age");

if (age <= 0) {
  alert("Sorry Invalid Age");
} else if (age >= 18) {
  console.log(`You are eligible for Addmission`);
} else {
  console.log(
    `Your age is ${age} not eligible for Addmission because Your age is less then 18`,
  );
}
