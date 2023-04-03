// let hello = () => console.log("hello!");
// hello();

//   const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
//   const cars2 = [...cars1];
//   const cars3 = [...cars1, "NISSAN", "TOYOTA"];
//   console.log(cars2, cars3);

// const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
// const cars2 = ["NISSAN", "TOYOTA"];
// const cars3 = [...cars1, ...cars2];
// console.log(cars3);

// const cars1 = {
//   Brand: "BMW",
//   Color: "RED",
// };
// const cars2 = { ...cars1 };
// console.log(cars2);

// const cars1 = {
//   Brand: "Toyota",
//   Color: "RED",
// };
// const cars2 = {
//   Brand: "Nissan",
//   Color: "BLUE",
//   Year: 2004,
// };
// const cars3 = { ...cars1, ...cars2 };
// console.log(cars3);

const numbers = [3, 5, 7, 8, 9];
const [a, b, c, ...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);
