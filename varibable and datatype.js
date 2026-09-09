/*//local scope
let a = 2;
console.log("the value of a is", a);
//global scope
var b = 20;
console.log("the value of b is", b)
//constent variable
const c = 25;
console.log("the value of c is", c)
//lets change the values of all variables;
a = 5
console.log("the value of a", a);
b = 40
console.log("the value of b", b);
c = 55;
console.log("The value of c", c);
//const is not changable.*/

/*string datatype
let firstName = prompt("Enter your First Name:");
let lastName = prompt("Enter your Last Name");
let age = +prompt("Enter your Age")
// before using + sign is for to convert the string into number;
console.log(`My name is ${firstName} ${lastName} and I am ${age} year old`);*/

//object implimentation
const product = {
  prodectName: "Jel pain",
  rating: 5,
  deail_of_day: "20% Off",
  price: 1500,
  isFollow: false,
};
console.log(product);
console.log(product["isFollow"]); //form object we print a value as

/*const profile = {
  fullName: "Ubaid Ur Rahman",
  isFollow: false,
  message: prompt("Enter your message"),
  post: "205 post",
  follower: "345k Followers",
  following: "4 Following",
  email: "ubaidkhanuk6973937@gmail.com",
  bio: "Co-funder of the Codevista Technical company",
};
console.log(profile);*/
