let product = {
  productName: "Shirt",
  productPrice: 2099,
  productColor: "Red",
};
let shoes = {
  shoesName: "Skechar",
  shoesPrice: 3599,
  shoesColor: "Black",
};
let shopping = prompt(
  `Only two items are availible now Product, shoes. Which one you want?`,
);
if (shopping === "product") {
  for (let key in product) {
    console.log(`${key} = ${product[key]}`);
  }
} else if (shopping === "shoes") {
  for (let key in shoes) {
    console.log(`${key} = ${shoes[key]}`);
  }
}
