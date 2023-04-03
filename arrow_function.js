const inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 },
];

// Cách shorthand
// console.log(
//   inventory
//     .filter((item) => item.type === "machine")
//     .reduce((pre, cur) => {
//       return pre + cur.value;
//     }, 0)
// );

// Cách thông thường
let totalMachineValue = inventory
  .filter((item) => {
    if (item.type === "machine") {
      return item.value;
    }
  })
  .reduce((pre, cur) => {
    return pre + cur.value;
  }, 0);
console.log(totalMachineValue);
